use std::sync::Arc;

use super::{background_job::BackgroundJobEvent, graphql_pagination_to_filter};
use async_trait::async_trait;
use juniper::ID;
use tabby_db::{DbConn, WebDocumentDAO};
use tabby_schema::web_documents::PresetWebDocument;
use tabby_schema::{
    job::{JobInfo, JobService},
    web_documents::{CustomWebDocument, WebDocumentService},
    AsID, AsRowid, Result,
};

pub fn create(db: DbConn, job_service: Arc<dyn JobService>) -> impl WebDocumentService {
    WebDocumentServiceImpl { db, job_service }
}

struct WebDocumentServiceImpl {
    db: DbConn,
    job_service: Arc<dyn JobService>,
}

#[async_trait]
impl WebDocumentService for WebDocumentServiceImpl {
    async fn list_custom_web_documents(
        &self,
        after: Option<String>,
        before: Option<String>,
        first: Option<usize>,
        last: Option<usize>,
    ) -> Result<Vec<CustomWebDocument>> {
        Ok(vec![])
    }

    async fn create_custom_web_document(&self, name: String, url: String) -> Result<ID> {
        Ok(ID::new("0"))
    }

    async fn delete_custom_web_document(&self, id: ID) -> Result<()> {
        Ok(())
    }

    async fn list_preset_web_documents(&self,
                                       after: Option<String>,
                                       before: Option<String>,
                                       first: Option<usize>,
                                       last: Option<usize>,
                                       active: bool) -> Result<Vec<PresetWebDocument>> {
        Ok(vec![])
    }

    async fn set_preset_web_documents_active(&self, name: String, active: bool) -> Result<ID> {
        Ok(ID::new("0"))
    }
}
