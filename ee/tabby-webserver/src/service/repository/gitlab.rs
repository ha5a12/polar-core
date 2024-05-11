use std::collections::{HashMap, HashSet};

use async_trait::async_trait;
use juniper::ID;
use tabby_common::config::RepositoryConfig;
use tabby_db::DbConn;
use tabby_schema::{
    repository::{
        GitlabProvidedRepository, GitlabRepositoryProvider, GitlabRepositoryService, Repository,
        RepositoryProvider,
    },
    AsID, AsRowid, Result,
};
use tokio::sync::mpsc::UnboundedSender;
use url::Url;

use crate::service::{background_job::BackgroundJobEvent, graphql_pagination_to_filter};

struct GitlabRepositoryProviderServiceImpl {
    db: DbConn,
    background_job: UnboundedSender<BackgroundJobEvent>,
}

pub fn create(
    db: DbConn,
    background_job: UnboundedSender<BackgroundJobEvent>,
) -> impl GitlabRepositoryService {
    GitlabRepositoryProviderServiceImpl { db, background_job }
}

#[async_trait]
impl GitlabRepositoryService for GitlabRepositoryProviderServiceImpl {
    async fn create_provider(&self, display_name: String, access_token: String) -> Result<ID> {
        let id = self
            .db
            .create_gitlab_provider(display_name, access_token)
            .await?;
        let _ = self.background_job.send(BackgroundJobEvent::SyncGitlab(id));
        Ok(id.as_id())
    }

    async fn delete_provider(&self, id: ID) -> Result<()> {
        self.db.delete_gitlab_provider(id.as_rowid()?).await?;
        Ok(())
    }

    async fn list_providers(
        &self,
        ids: Vec<ID>,
        after: Option<String>,
        before: Option<String>,
        first: Option<usize>,
        last: Option<usize>,
    ) -> Result<Vec<GitlabRepositoryProvider>> {
        let (limit, skip_id, backwards) = graphql_pagination_to_filter(after, before, first, last)?;

        let ids = ids
            .into_iter()
            .map(|id| id.as_rowid())
            .collect::<Result<Vec<_>, _>>()?;

        let providers = self
            .db
            .list_gitlab_repository_providers(ids, limit, skip_id, backwards)
            .await?;
        Ok(providers
            .into_iter()
            .map(GitlabRepositoryProvider::from)
            .collect())
    }

    async fn list_repositories(
        &self,
        providers: Vec<ID>,
        active: Option<bool>,
        after: Option<String>,
        before: Option<String>,
        first: Option<usize>,
        last: Option<usize>,
    ) -> Result<Vec<GitlabProvidedRepository>> {
        let providers = providers
            .into_iter()
            .map(|i| i.as_rowid())
            .collect::<Result<Vec<_>, _>>()?;
        let (limit, skip_id, backwards) = graphql_pagination_to_filter(after, before, first, last)?;
        let repos = self
            .db
            .list_gitlab_provided_repositories(providers, active, limit, skip_id, backwards)
            .await?;

        Ok(repos
            .into_iter()
            .map(GitlabProvidedRepository::from)
            .collect())
    }

    async fn update_repository_active(&self, id: ID, active: bool) -> Result<()> {
        let id = id.as_rowid()?;
        self.db
            .update_gitlab_provided_repository_active(id, active)
            .await?;
        if active {
            let repository = self.db.get_gitlab_provided_repository(id).await?;
            let provider = self
                .db
                .get_gitlab_provider(repository.gitlab_repository_provider_id)
                .await?;

            if let Some(git_url) =
                make_git_url(&repository.git_url, provider.access_token.as_deref())
            {
                let _ =
                    self.background_job
                        .send(BackgroundJobEvent::Scheduler(RepositoryConfig::new(
                            git_url,
                        )));
            }
        }
        Ok(())
    }

    async fn update_provider(
        &self,
        id: ID,
        display_name: String,
        access_token: Option<String>,
    ) -> Result<()> {
        let id = id.as_rowid()?;
        self.db
            .update_gitlab_provider(id, display_name, access_token.clone())
            .await?;
        if access_token.is_some() {
            let _ = self.background_job.send(BackgroundJobEvent::SyncGitlab(id));
        }
        Ok(())
    }

    async fn list_active_git_urls(&self) -> Result<Vec<String>> {
        let tokens: HashMap<String, String> = self
            .list_providers(vec![], None, None, None, None)
            .await?
            .into_iter()
            .filter_map(|provider| Some((provider.id.to_string(), provider.access_token?)))
            .collect();

        let mut repos = self
            .list_repositories(vec![], Some(true), None, None, None, None)
            .await?;

        deduplicate_gitlab_repositories(&mut repos);

        let urls = repos
            .into_iter()
            .filter_map(|repo| {
                let id = repo.gitlab_repository_provider_id.to_string();
                let access_token = tokens.get(&id).map(|s| s.as_str());
                make_git_url(&repo.git_url, access_token)
            })
            .collect();

        Ok(urls)
    }
}

fn make_git_url(git_url: &str, access_token: Option<&str>) -> Option<String> {
    let mut url = Url::parse(git_url).ok()?;
    url.set_username("oauth2").ok()?;
    url.set_password(access_token).ok()?;

    Some(url.to_string())
}

fn deduplicate_gitlab_repositories(repositories: &mut Vec<GitlabProvidedRepository>) {
    let mut vendor_ids = HashSet::new();
    repositories.retain(|repo| vendor_ids.insert(repo.vendor_id.clone()));
}

#[async_trait]
impl RepositoryProvider for GitlabRepositoryProviderServiceImpl {
    async fn repository_list(&self) -> Result<Vec<Repository>> {
        Ok(self
            .list_repositories(vec![], Some(true), None, None, None, None)
            .await?
            .into_iter()
            .map(|x| x.into())
            .collect())
    }

    async fn get_repository(&self, id: &ID) -> Result<Repository> {
        let repo: GitlabProvidedRepository = self
            .db
            .get_gitlab_provided_repository(id.as_rowid()?)
            .await?
            .into();
        Ok(repo.into())
    }
}

#[cfg(test)]
mod tests {

    use tabby_schema::AsID;

    use super::*;

    fn create_fake() -> UnboundedSender<BackgroundJobEvent> {
        let (sender, _) = tokio::sync::mpsc::unbounded_channel();
        sender
    }

    #[tokio::test]
    async fn test_gitlab_provided_repositories() {
        let db = DbConn::new_in_memory().await.unwrap();
        let service = create(db.clone(), create_fake());

        let provider_id1 = db
            .create_gitlab_provider("test_id1".into(), "test_secret".into())
            .await
            .unwrap();

        let provider_id2 = db
            .create_gitlab_provider("test_id2".into(), "test_secret".into())
            .await
            .unwrap();

        let repo_id1 = db
            .upsert_gitlab_provided_repository(
                provider_id1,
                "vendor_id1".into(),
                "test_repo1".into(),
                "https://gitlab.com/test/test1".into(),
            )
            .await
            .unwrap();

        let repo_id2 = db
            .upsert_gitlab_provided_repository(
                provider_id2,
                "vendor_id2".into(),
                "test_repo2".into(),
                "https://gitlab.com/test/test2".into(),
            )
            .await
            .unwrap();

        // Test listing with no filter on providers
        let repos = service
            .list_repositories(vec![], None, None, None, None, None)
            .await
            .unwrap();

        assert_eq!(repos.len(), 2);
        assert_eq!(repos[0].name, "test_repo1");
        assert_eq!(repos[1].name, "test_repo2");

        // Test listing with a filter on providers
        let repos = service
            .list_repositories(vec![provider_id1.as_id()], None, None, None, None, None)
            .await
            .unwrap();

        assert_eq!(repos.len(), 1);
        assert_eq!(repos[0].name, "test_repo1");

        // Test listing with a filter on active status
        let repos = service
            .list_repositories(vec![], Some(true), None, None, None, None)
            .await
            .unwrap();

        assert_eq!(0, repos.len());

        let repos = service
            .list_repositories(vec![], Some(false), None, None, None, None)
            .await
            .unwrap();

        assert_eq!(2, repos.len());

        // Test deletion and toggling active status
        db.delete_gitlab_provided_repository(repo_id1)
            .await
            .unwrap();

        db.update_gitlab_provided_repository_active(repo_id2, true)
            .await
            .unwrap();

        let repos = service
            .list_repositories(vec![], None, None, None, None, None)
            .await
            .unwrap();

        assert_eq!(repos.len(), 1);
        assert!(repos[0].active);
    }

    #[tokio::test]
    async fn test_gitlab_repository_provider_crud() {
        let db = DbConn::new_in_memory().await.unwrap();
        let service = create(db.clone(), create_fake());

        let id = service
            .create_provider("id".into(), "secret".into())
            .await
            .unwrap();

        // Test listing gitlab providers
        let providers = service
            .list_providers(vec![], None, None, None, None)
            .await
            .unwrap();
        assert_eq!(providers.len(), 1);
        assert_eq!(providers[0].access_token, Some("secret".into()));

        // Test deleting gitlab provider
        service.delete_provider(id.clone()).await.unwrap();

        assert_eq!(
            0,
            service
                .list_providers(vec![], None, None, None, None)
                .await
                .unwrap()
                .len()
        );
    }

    #[tokio::test]
    async fn test_provided_git_urls() {
        let db = DbConn::new_in_memory().await.unwrap();
        let service = super::create(db.clone(), create_fake());

        let provider_id = db
            .create_gitlab_provider("provider1".into(), "token".into())
            .await
            .unwrap();

        let repo_id = db
            .upsert_gitlab_provided_repository(
                provider_id,
                "vendor_id1".into(),
                "test_repo".into(),
                "https://gitlab.com/TabbyML/tabby".into(),
            )
            .await
            .unwrap();

        db.update_gitlab_provided_repository_active(repo_id, true)
            .await
            .unwrap();

        let git_urls = service.list_active_git_urls().await.unwrap();
        assert_eq!(
            git_urls,
            ["https://oauth2:token@gitlab.com/TabbyML/tabby".to_string()]
        );
    }
}
