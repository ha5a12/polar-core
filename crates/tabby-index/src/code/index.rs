use std::{pin::pin, sync::Arc};

use async_stream::stream;
use futures::StreamExt;
use ignore::{DirEntry, Walk};
use tabby_common::index::{self, code, corpus};
use tabby_inference::Embedding;
use tantivy::{doc, TantivyDocument};
use tracing::warn;

use super::{
    create_code_builder,
    intelligence::{CodeIntelligence, SourceCode},
    CodeRepository,
};
use crate::indexer::Indexer;

// Magic numbers
static MAX_LINE_LENGTH_THRESHOLD: usize = 300;
static AVG_LINE_LENGTH_THRESHOLD: f32 = 150f32;
static MIN_ALPHA_NUM_FRACTION: f32 = 0.25f32;
static MAX_NUMBER_OF_LINES: usize = 100000;
static MAX_NUMBER_FRACTION: f32 = 0.5f32;

pub async fn index_repository(
    embedding: Arc<dyn Embedding>,
    repository: &CodeRepository,
    commit: &str,
) {
    let total_files = Walk::new(repository.dir()).count();
    let file_stream = stream! {
        for file in Walk::new(repository.dir()) {
            let file = match file {
                Ok(file) => file,
                Err(e) => {
                    warn!("Failed to walk file tree for indexing: {e}");
                    continue;
                }
            };

            yield file;
        }
    }
    // Commit every 100 files
    .chunks(100);

    let mut file_stream = pin!(file_stream);

    let mut count_files = 0;
    let mut count_chunks = 0;
    while let Some(files) = file_stream.next().await {
        count_files += files.len();
        count_chunks += add_changed_documents(repository, commit, embedding.clone(), files).await;
        logkit::info!("Processed {count_files}/{total_files} files, updated {count_chunks} chunks",);
    }
}

pub async fn garbage_collection() {
    let index = Indexer::new(corpus::CODE);
    stream! {
        let mut num_to_keep = 0;
        let mut num_to_delete = 0;

        for await id in index.iter_ids() {
            let Some(source_file_id) = SourceCode::source_file_id_from_id(&id) else {
                warn!("Failed to extract source file id from index id: {id}");
                num_to_delete += 1;
                index.delete(&id);
                continue;
            };

            if CodeIntelligence::check_source_file_id_matched(source_file_id) {
                num_to_keep += 1;
            } else {
                num_to_delete += 1;
                index.delete(&id);
            }
        }

        logkit::info!("Finished garbage collection for code index: {num_to_keep} items kept, {num_to_delete} items removed");
        index.commit();
    }.collect::<()>().await;
}

async fn add_changed_documents(
    repository: &CodeRepository,
    commit: &str,
    embedding: Arc<dyn Embedding>,
    files: Vec<DirEntry>,
) -> usize {
    let concurrency = std::cmp::max(std::thread::available_parallelism().unwrap().get() * 4, 64);
    let builder = Arc::new(create_code_builder(Some(embedding)));
    let index = Arc::new(Indexer::new(corpus::CODE));
    let cloned_index = index.clone();

    let mut count_docs = 0;
    stream! {
        for file in files {
            let Some(key) = CodeIntelligence::compute_source_file_id(file.path()) else {
                continue;
            };

            let id = SourceCode::to_index_id(&repository.source_id, &key).id;

            // Skip if already indexed and has no failed chunks,
            // when skip, we should check if the document needs to be backfilled.
            if !require_updates(cloned_index.clone(), &id) {
                backfill_commit_if_needed(cloned_index.clone(), &id, commit);
                continue;
            }

            let Some(code) = CodeIntelligence::compute_source_file(repository, commit, file.path()) else {
                continue;
            };

            if !is_valid_file(&code) {
                continue;
            }

            let (_, s) = builder.build(code).await;
            // must delete before adding, otherwise the some fields like failed_chunks_count will remain
            cloned_index.delete(&id);
            for await task in s {
                yield task;
            }
        }
    }
    .buffer_unordered(concurrency)
    .filter_map(|x| async { x.ok().flatten() })
    .for_each(|x| {
        count_docs += 1;
        index.add(x)
    })
    .await;

    match Arc::try_unwrap(index) {
        Ok(index) => index.commit(),
        Err(_) => {
            panic!("Failed to commit code index");
        }
    };

    count_docs
}

fn require_updates(indexer: Arc<Indexer>, id: &str) -> bool {
    if indexer.is_indexed(id) && !indexer.has_failed_chunks(id) {
        return false;
    };

    true
}

// v0.23.0 add the commit field to the code document.
async fn backfill_commit_if_needed(indexer: Arc<Indexer>, id: &str, commit: &str) -> Result<()> {
    if indexer.has_attribute_field(id, code::fields::ATTRIBUTE_COMMIT) {
        return Ok(());
    }

    let doc = indexer.get_doc(id).await?;
    indexer.delete_doc(id);
    indexer.add(create_document_with_commit(&doc, commit));

    Ok(())
}

fn is_valid_file(file: &SourceCode) -> bool {
    file.max_line_length <= MAX_LINE_LENGTH_THRESHOLD
        && file.avg_line_length <= AVG_LINE_LENGTH_THRESHOLD
        && file.alphanum_fraction >= MIN_ALPHA_NUM_FRACTION
        && file.num_lines <= MAX_NUMBER_OF_LINES
        && file.number_fraction <= MAX_NUMBER_FRACTION
}

fn create_document_with_commit(doc: &TantivyDocument, commit: &str) -> TantivyDocument {
    let schema = tabby_common::index::IndexSchema::instance();
    doc! {
        schema.field_id => get_text(doc, schema.field_id),
        schema.field_source_id => get_text(doc, schema.field_source_id).to_string(),
        schema.field_corpus => get_text(doc, schema.field_corpus).to_string(),
        schema.field_attributes => json!({
            code::fields::ATTRIBUTE_COMMIT: commit,
        }),
        schema.field_updated_at => get_text(doc, schema.field_updated_at).to_string(),,
        schema.field_failed_chunks_count => get_json_number_field(doc, schema.field_failed_chunks_count, code::fields::FAILED_CHUNKS_COUNT) as usize,
    }
}

fn get_text(doc: &TantivyDocument, field: schema::Field) -> &str {
    doc.get_first(field).unwrap().as_str().unwrap()
}

fn get_json_number_field(doc: &TantivyDocument, field: schema::Field, name: &str) -> i64 {
    doc.get_first(field)
        .unwrap()
        .as_object()
        .unwrap()
        .find(|(k, _)| *k == name)
        .unwrap()
        .1
        .as_i64()
        .unwrap()
}

fn get_json_text_field<'a>(doc: &'a TantivyDocument, field: schema::Field, name: &str) -> &'a str {
    doc.get_first(field)
        .unwrap()
        .as_object()
        .unwrap()
        .find(|(k, _)| *k == name)
        .unwrap()
        .1
        .as_str()
        .unwrap()
}

#[cfg(test)]
mod tests {
    use futures::StreamExt;
    use insta::assert_snapshot;

    use crate::code::intelligence::CodeIntelligence;

    #[tokio::test]
    async fn test_code_splitter() {
        // First file, tabby-inference/src/decoding.rs
        let file_contents = include_str!("../../../tabby-inference/src/decoding.rs");

        let rust_chunks = CodeIntelligence::chunks(file_contents, "rust")
            .map(|(_, chunk)| chunk)
            .collect::<Vec<_>>()
            .await;

        assert_snapshot!(format!("{:#?}", rust_chunks));

        let text_chunks = CodeIntelligence::chunks(file_contents, "unknown")
            .map(|(_, chunk)| chunk)
            .collect::<Vec<_>>()
            .await;

        assert_snapshot!(format!("{:#?}", text_chunks));

        // Second file, tabby-db/src/cache.rs
        let file_contents2 = include_str!("../../../../ee/tabby-db/src/cache.rs");

        let rust_chunks2 = CodeIntelligence::chunks(file_contents2, "rust")
            .map(|(_, chunk)| chunk)
            .collect::<Vec<_>>()
            .await;

        assert_snapshot!(format!("{:#?}", rust_chunks2));

        let text_chunks2 = CodeIntelligence::chunks(file_contents2, "unknown")
            .map(|(_, chunk)| chunk)
            .collect::<Vec<_>>()
            .await;

        assert_snapshot!(format!("{:#?}", text_chunks2));
    }
}
