use std::sync::Arc;

use anyhow::anyhow;
use chrono::{DateTime, Utc};
use juniper::ID;
use serde::{Deserialize, Serialize};
use tabby_inference::Embedding;
use tabby_schema::{
    integration::{IntegrationKind, IntegrationService},
    repository::ThirdPartyRepositoryService,
};
use tracing::debug;

use self::issues::index_github_issues;
use super::{
    helper::{Job},
    BackgroundJobEvent,
};

mod issues;

#[derive(Serialize, Deserialize, Clone)]
pub struct SyncIntegrationJob {
    integration_id: ID,
}

impl Job for SyncIntegrationJob {
    const NAME: &'static str = "third_party_repository_sync";
}

impl SyncIntegrationJob {
    pub fn new(integration_id: ID) -> Self {
        Self { integration_id }
    }

    pub async fn run(
        self,
        repository_service: Arc<dyn ThirdPartyRepositoryService>,
    ) -> tabby_schema::Result<()> {
        repository_service
            .sync_repositories(self.integration_id)
            .await?;
        Ok(())
    }

    pub async fn cron(
        _now: DateTime<Utc>,
        sender: tokio::sync::mpsc::UnboundedSender<BackgroundJobEvent>,
        integration_service: Arc<dyn IntegrationService>,
    ) -> tabby_schema::Result<()> {
        debug!("Syncing all third-party repositories");

        for integration in integration_service
            .list_integrations(None, None, None, None, None, None)
            .await?
        {
            sender
                .send(BackgroundJobEvent::SyncThirdPartyRepositories(
                    integration.id,
                ))
                .map_err(|_| anyhow!("Failed to enqueue scheduler job"))?;
        }
        Ok(())
    }
}

#[derive(Serialize, Deserialize, Clone)]
pub struct IndexIssuesJob {
    integration_id: ID,
}

impl Job for IndexIssuesJob {
    const NAME: &'static str = "index_issues";
}

impl IndexIssuesJob {
    pub fn new(integration_id: ID) -> Self {
        Self { integration_id }
    }

    pub async fn run(
        self,
        embedding: Arc<dyn Embedding>,
        repository_service: Arc<dyn ThirdPartyRepositoryService>,
        integration_service: Arc<dyn IntegrationService>,
    ) -> tabby_schema::Result<()> {
        let integration = integration_service
            .get_integration(self.integration_id)
            .await?;

        for repository in repository_service
            .list_repositories_with_filter(
                Some(vec![integration.id.clone()]),
                None,
                Some(true),
                None,
                None,
                None,
                None,
            )
            .await?
        {
            match &integration.kind {
                IntegrationKind::Github | IntegrationKind::GithubSelfHosted => {
                    index_github_issues(
                        embedding.clone(),
                        integration.api_base(),
                        &repository.display_name,
                        &integration.access_token,
                    )
                    .await?;
                }
                IntegrationKind::Gitlab | IntegrationKind::GitlabSelfHosted => {}
            }
        }
        Ok(())
    }

    pub async fn cron(
        _now: DateTime<Utc>,
        sender: tokio::sync::mpsc::UnboundedSender<BackgroundJobEvent>,
        integration_service: Arc<dyn IntegrationService>,
    ) -> tabby_schema::Result<()> {
        for integration in integration_service
            .list_integrations(None, None, None, None, None, None)
            .await?
        {
            sender
                .send(BackgroundJobEvent::IndexIssues(integration.id))
                .map_err(|_| anyhow!("Failed to enqueue issue index job"))?;
        }
        Ok(())
    }
}
