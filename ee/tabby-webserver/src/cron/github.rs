use anyhow::Result;
use chrono::Utc;
use juniper::ID;
use octocrab::{models::Repository, GitHubError, Octocrab};
use std::{collections::HashSet, sync::Arc};
use tracing::warn;

use crate::schema::github_repository_provider::{
    GithubRepositoryProvider, GithubRepositoryProviderService,
};

pub async fn refresh_all_repositories(
    service: Arc<dyn GithubRepositoryProviderService>,
) -> Result<()> {
    for provider in service
        .list_github_repository_providers(vec![], None, None, None, None)
        .await?
    {
        let start = Utc::now();
        refresh_repositories_for_provider(service.clone(), provider.id.clone()).await?;
        service
            .delete_outdated_github_provided_repositories(provider.id, start)
            .await?;
    }
    Ok(())
}

async fn refresh_repositories_for_provider(
    service: Arc<dyn GithubRepositoryProviderService>,
    provider_id: ID,
) -> Result<()> {
    let cached_repositories: HashSet<_> = service
        .list_github_provided_repositories_by_provider(
            vec![provider_id.clone()],
            None,
            None,
            None,
            None,
        )
        .await?
        .into_iter()
        .map(|repo| repo.vendor_id)
        .collect();

    let provider = service.get_github_repository_provider(provider_id).await?;
    let repos = match fetch_all_repos(&provider).await {
        Ok(repos) => repos,
        Err(octocrab::Error::GitHub {
            source: source @ GitHubError { .. },
            ..
        }) if source.status_code == http::status::StatusCode::UNAUTHORIZED => {
            service
                .update_github_repository_provider_access_token(provider.id.clone(), None)
                .await?;
            warn!(
                "GitHub credentials for provider {} are expired or invalid",
                provider.display_name
            );
            return Err(source.into());
        }
        Err(e) => {
            warn!("Failed to fetch repositories from github: {e}");
            return Err(e.into());
        }
    };
    for repo in repos {
        let id = repo.id.to_string();
        let Some(mut url) = repo.git_url else {
            continue;
        };
        let _ = url.set_scheme("https");
        let url = url.to_string();
        if cached_repositories.contains(&id) {
            service
                .update_github_provided_repository(id, repo.name, url)
                .await?;
        } else {
            service
                .create_github_provided_repository(provider.id.clone(), id, repo.name, url)
                .await?;
        }
    }

    Ok(())
}

async fn fetch_all_repos(
    provider: &GithubRepositoryProvider,
) -> Result<Vec<Repository>, octocrab::Error> {
    let Some(token) = &provider.access_token else {
        return Ok(vec![]);
    };
    let octocrab = Octocrab::builder()
        .user_access_token(token.to_string())
        .build()?;

    let mut page = 1;
    let mut repos = vec![];

    loop {
        let response = octocrab
            .current()
            .list_repos_for_authenticated_user()
            .visibility("all")
            .page(page)
            .send()
            .await?;

        let pages = response.number_of_pages().unwrap_or_default() as u8;
        repos.extend(response.items);

        page += 1;
        if page > pages {
            break;
        }
    }
    Ok(repos)
}
