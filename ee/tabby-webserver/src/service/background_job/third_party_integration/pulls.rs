use anyhow::{anyhow, Result};
use async_stream::stream;
use chrono::{DateTime, Utc};
use futures::Stream;
use gitlab::api::{issues::ProjectIssues, AsyncQuery};
use octocrab::{models::IssueState, Octocrab};
use serde::Deserialize;
use tabby_index::public::{
    StructuredDoc, StructuredDocFields, StructuredDocPullRequestFields,
    StructuredDocPullRequestState,
};

use crate::service::create_gitlab_client;

pub async fn list_github_pulls(
    source_id: &str,
    api_base: &str,
    full_name: &str,
    access_token: &str,
) -> Result<impl Stream<Item = (DateTime<Utc>, StructuredDoc)>> {
    let octocrab = Octocrab::builder()
        .personal_token(access_token.to_string())
        .base_uri(api_base)?
        .build()?;

    let (owner, repo) = full_name
        .split_once('/')
        .ok_or_else(|| anyhow!("Invalid repository name"))?;

    let owner = owner.to_owned();
    let repo = repo.to_owned();
    let source_id = source_id.to_owned();
    let s = stream! {
        let mut page = 1u32;
        loop {
            let response = match octocrab
                .pulls(&owner, &repo)
                .list()
                .state(octocrab::params::State::All)
                .page(page)
                .send()
                .await {
                    Ok(x) => x,
                    Err(e) => {
                        logkit::error!("Failed to fetch pull requests: {}", e);
                        break;
                    }
            };

            let pages = response.number_of_pages().unwrap_or_default();

            for pull in response.items {
                let title = pull.title.unwrap_or_default();

                let patch = match octocrab.pulls(&owner, &repo).get_patch(pull.number).await {
                    Ok(x) => x,
                    Err(e) => {
                        println!("Failed to fetch pull request patch for {}: {}", title, e);
                        logkit::error!("Failed to fetch pull request patch for {}: {}", title, e);
                        continue
                    }
                };

                let state = match (pull.state, pull.merged_at) {
                    (Some(IssueState::Closed), Some(_)) => StructuredDocPullRequestState::Merged,
                    (Some(IssueState::Closed), None) => StructuredDocPullRequestState::Closed,
                    _ => StructuredDocPullRequestState::Open,
                }.to_string();

                let doc = StructuredDoc {
                    source_id: source_id.to_string(),
                    fields: StructuredDocFields::Pull(StructuredDocPullRequestFields {
                        link: pull.url,
                        title,
                        body: pull.body.unwrap_or_default(),
                        patch: patch,
                        state,
                    })
                };

                yield (pull.updated_at.unwrap(), doc);
            }

            page += 1;
            if page > pages {
                break;
            }
        }
    };

    Ok(s)
}

// #[derive(Deserialize)]
// struct GitlabIssue {
//     title: String,
//     description: Option<String>,
//     web_url: String,
//     updated_at: DateTime<Utc>,
//     state: String,
// }

// pub async fn list_gitlab_issues(
//     source_id: &str,
//     api_base: &str,
//     full_name: &str,
//     access_token: &str,
// ) -> Result<impl Stream<Item = (DateTime<Utc>, StructuredDoc)>> {
//     let gitlab = create_gitlab_client(api_base, access_token).await?;

//     let source_id = source_id.to_owned();
//     let full_name = full_name.to_owned();
//     let s = stream! {

//         let issues: Vec<GitlabIssue> = match gitlab::api::paged(
//             ProjectIssues::builder().project(&full_name).build().expect("Failed to build request"),
//             gitlab::api::Pagination::All,
//         )
//         .query_async(&gitlab)
//         .await {
//             Ok(x) => x,
//             Err(e) => {
//                 logkit::error!("Failed to fetch issues: {}", e);
//                 return;
//             }
//         };

//         for issue in issues {
//             let doc = StructuredDoc {
//                 source_id: source_id.to_owned(),
//                 fields: StructuredDocFields::Issue(StructuredDocIssueFields {
//                 link: issue.web_url,
//                 title: issue.title,
//                 body: issue.description.unwrap_or_default(),
//                 closed: issue.state == "closed",
//             })};
//             yield (issue.updated_at, doc);
//         }
//     };

//     Ok(s)
// }
