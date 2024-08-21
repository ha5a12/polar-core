use std::{sync::Arc, time::Duration};

use chrono::Utc;
use futures::StreamExt;
use tabby_crawler::crawl_pipeline;
use tabby_index::public::{DocIndexer, WebDocument};
use tabby_inference::Embedding;

use super::helper::Job;

const CRAWLER_TIMEOUT_SECS: u64 = 3600;

pub struct WebCrawlerJob {
    source_id: String,
    url: String,
}

impl Job for WebCrawlerJob {
    const NAME: &'static str = "web_crawler";
}

impl WebCrawlerJob {
    pub fn new(source_id: String, url: String) -> Self {
        Self { source_id, url }
    }

    pub async fn run_impl(self, embedding: Arc<dyn Embedding>) -> tabby_schema::Result<()> {
        logkit::info!("Starting doc index pipeline for {}", self.url);
        let embedding = embedding.clone();
        let mut num_docs = 0;
        let indexer = DocIndexer::new(embedding.clone());

        let mut pipeline = Box::pin(crawl_pipeline(&self.url).await?);
        while let Some(doc) = pipeline.next().await {
            logkit::info!("Fetching {}", doc.url);
            let source_doc = WebDocument {
                source_id: self.source_id.clone(),
                id: doc.url.clone(),
                title: doc.metadata.title.unwrap_or_default(),
                link: doc.url,
                body: doc.markdown,
            };

            num_docs += 1;
            indexer.add(Utc::now(), source_doc).await;
        }
        logkit::info!("Crawled {} documents from '{}'", num_docs, self.url);
        indexer.commit();
        Ok(())
    }
    pub async fn run(self, embedding: Arc<dyn Embedding>) -> tabby_schema::Result<()> {
        let url = self.url.clone();
        if tokio::time::timeout(
            Duration::from_secs(CRAWLER_TIMEOUT_SECS),
            self.run_impl(embedding),
        )
        .await
        .is_err()
        {
            logkit::warn!(
                "Crawled for url: {} timeout after {} seconds",
                url,
                CRAWLER_TIMEOUT_SECS
            );
        }
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use std::sync::atomic::Ordering;
    use std::sync::atomic::{AtomicBool, AtomicUsize};
    use std::sync::Arc;
    use std::time::Duration;
    use tokio::time::Instant;

    async fn run(count: Arc<AtomicUsize>, finished: Arc<AtomicBool>) -> tabby_schema::Result<()> {
        let now = Instant::now();
        while now.elapsed() < Duration::from_secs(1) {
            tokio::time::sleep(Duration::from_millis(50)).await;
            count.fetch_add(1, Ordering::AcqRel);
        }
        finished.store(true, Ordering::Release);
        Ok(())
    }

    #[tokio::test]
    async fn timeout_function() {
        let count = Arc::new(AtomicUsize::new(0));
        let finished = Arc::new(AtomicBool::new(false));
        assert!(tokio::time::timeout(
            Duration::from_millis(200),
            run(count.clone(), finished.clone())
        )
        .await
        .is_err());
        assert!(count.load(Ordering::Acquire) > 1);
        assert_eq!(finished.load(Ordering::Acquire), false);
    }
}
