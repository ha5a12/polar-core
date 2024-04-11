use nucleo::Utf32String;
use tantivy::{
    query::{TermQuery, TermSetQuery},
    schema::{Field, IndexRecordOption, Schema, TextFieldIndexing, TextOptions, STORED, STRING},
    tokenizer::{NgramTokenizer, RegexTokenizer, RemoveLongFilter, TextAnalyzer},
    Index, Term,
};

use crate::config::RepositoryConfig;

static CODE_TOKENIZER: &str = "code";
static IDENTIFIER_TOKENIZER: &str = "identifier";

pub fn register_tokenizers(index: &Index) {
    let code_tokenizer = TextAnalyzer::builder(RegexTokenizer::new(r"(?:\w+)").unwrap())
        .filter(RemoveLongFilter::limit(128))
        .build();

    index.tokenizers().register(CODE_TOKENIZER, code_tokenizer);

    let identifier_tokenzier =
        TextAnalyzer::builder(NgramTokenizer::prefix_only(2, 5).unwrap()).build();

    index
        .tokenizers()
        .register(IDENTIFIER_TOKENIZER, identifier_tokenzier);
}

pub struct CodeSearchSchema {
    pub schema: Schema,
    pub field_git_url: Field,
    pub field_filepath: Field,
    pub field_language: Field,
    pub field_name: Field,
    pub field_kind: Field,
    pub field_body: Field,
}

impl CodeSearchSchema {
    pub fn new() -> Self {
        let mut builder = Schema::builder();

        let code_indexing_options = TextFieldIndexing::default()
            .set_tokenizer(CODE_TOKENIZER)
            .set_index_option(tantivy::schema::IndexRecordOption::WithFreqsAndPositions);
        let code_options = TextOptions::default()
            .set_indexing_options(code_indexing_options)
            .set_stored();

        let name_indexing_options = TextFieldIndexing::default()
            .set_tokenizer(IDENTIFIER_TOKENIZER)
            .set_index_option(tantivy::schema::IndexRecordOption::WithFreqsAndPositions);
        let name_options = TextOptions::default()
            .set_indexing_options(name_indexing_options)
            .set_stored();

        let field_git_url = builder.add_text_field("git_url", STRING | STORED);
        let field_filepath = builder.add_text_field("filepath", STRING | STORED);
        let field_language = builder.add_text_field("language", STRING | STORED);
        let field_name = builder.add_text_field("name", name_options);
        let field_kind = builder.add_text_field("kind", STRING | STORED);
        let field_body = builder.add_text_field("body", code_options);
        let schema = builder.build();

        Self {
            schema,
            field_git_url,
            field_filepath,
            field_language,
            field_name,
            field_kind,
            field_body,
        }
    }
}

impl Default for CodeSearchSchema {
    fn default() -> Self {
        Self::new()
    }
}

impl CodeSearchSchema {
    pub fn language_query(&self, language: &str) -> Box<TermQuery> {
        let language = match language {
            "javascript" | "typescript" | "javascriptreact" | "typescriptreact" => {
                "javascript-typescript"
            }
            _ => language,
        };
        Box::new(TermQuery::new(
            Term::from_field_text(self.field_language, language),
            IndexRecordOption::WithFreqsAndPositions,
        ))
    }

    pub fn body_query(&self, tokens: &[String]) -> Box<TermSetQuery> {
        Box::new(TermSetQuery::new(
            tokens
                .iter()
                .map(|x| Term::from_field_text(self.field_body, x)),
        ))
    }

    pub fn git_url_query(&self, git_url: &str, repos: &Vec<RepositoryConfig>) -> Box<TermQuery> {
        let mut nucleo = nucleo::Matcher::new(nucleo::Config::DEFAULT.match_paths());

        let closest_match = repos
            .iter()
            .filter_map(|repo| {
                Some((
                    repo.git_url.clone(),
                    // Matching using the input URL as the haystack instead of the needle yielded better scoring
                    // Example:
                    // haystack = "https://github.com/boxbeam/untwine" needle = "https://abc@github.com/boxbeam/untwine.git" => No match
                    // haystack = "https://abc@github.com/boxbeam/untwine.git" needle = "https://github.com/boxbeam/untwine" => Match, score 842
                    nucleo.fuzzy_match(
                        Utf32String::from(git_url).slice(..),
                        Utf32String::from(&*repo.git_url).slice(..),
                    )?,
                ))
            })
            .max_by_key(|(_, score)| *score)
            .map(|(entry, _score)| entry)
            .unwrap_or_else(|| git_url.to_string());

        Box::new(TermQuery::new(
            Term::from_field_text(self.field_git_url, &closest_match),
            IndexRecordOption::Basic,
        ))
    }
}

#[cfg(test)]
mod tests {
    use super::CodeSearchSchema;

    #[test]
    fn test_language_query() {
        let schema = CodeSearchSchema::new();
        let lhs = schema.language_query("javascript-typescript");
        assert_eq!(lhs.term(), schema.language_query("javascript").term());
        assert_eq!(lhs.term(), schema.language_query("typescript").term());
        assert_eq!(lhs.term(), schema.language_query("typescriptreact").term());
        assert_eq!(lhs.term(), schema.language_query("javascriptreact").term());
    }
}
