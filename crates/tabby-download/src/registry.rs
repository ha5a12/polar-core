use std::collections::HashMap;

use anyhow::{anyhow, Result};
use cached::proc_macro::cached;
use reqwest::Url;
use serde::Deserialize;

#[derive(Default)]
pub struct HuggingFaceRegistry {}

impl HuggingFaceRegistry {
    pub fn build_url(&self, model_id: &str, path: &str) -> String {
        format!("https://huggingface.co/{}/resolve/main/{}", model_id, path)
    }

    pub async fn build_cache_key(&self, url: &str) -> Result<String> {
        let res = reqwest::get(url).await?;
        let cache_key = res
            .headers()
            .get("etag")
            .ok_or(anyhow!("etag key missing"))?
            .to_str()?;
        Ok(cache_key.to_owned())
    }
}

#[derive(Default)]
pub struct ModelScopeRegistry {
}

impl ModelScopeRegistry {
    pub fn build_url(&self, model_id: &str, path: &str) -> String {
        format!(
            "https://modelscope.cn/api/v1/models/{}/repo?FilePath={}",
            model_id,
            urlencoding::encode(path)
        )
    }

    pub async fn build_cache_key(&self, url: &str) -> Result<String> {
        let url = Url::parse(url)?;
        let model_id = url.path()
            .strip_prefix("/api/v1/models/")
            .ok_or(anyhow!("Invalid url"))?
            .strip_suffix("/repo")
            .ok_or(anyhow!("Invalid url"))?;

        let query: HashMap<_, _> = url.query_pairs().into_owned().collect();
        let path = query
            .get("FilePath")
            .ok_or(anyhow!("Failed to extract FilePath"))?;
        self.get_cache_key(model_id, path).await
    }

    async fn get_cache_key(&self, model_id: &str, path: &str) -> Result<String> {
        let revision_map = fetch_revision_map(model_id.to_owned()).await?;
        for x in revision_map.data.files {
            if x.path == path {
                return Ok(x.sha256);
            }
        }

        Err(anyhow!("Failed to find {} in revisions", path))
    }
}

#[cached(size = 1, result = true)]
async fn fetch_revision_map(model_id: String) -> Result<ModelScopeRevision> {
    let url = format!(
        "https://modelscope.cn/api/v1/models/{}/repo/files?Recursive=true",
        model_id
    );
    let resp = reqwest::get(url)
        .await?
        .json::<ModelScopeRevision>()
        .await?;
    Ok(resp)
}

#[derive(Deserialize, Clone)]
#[serde(rename_all = "PascalCase")]
struct ModelScopeRevision {
    data: ModelScopeRevisionData,
}

#[derive(Deserialize, Clone)]
#[serde(rename_all = "PascalCase")]
struct ModelScopeRevisionData {
    files: Vec<ModelScopeRevisionFile>,
}

#[derive(Deserialize, Clone)]
#[serde(rename_all = "PascalCase")]
struct ModelScopeRevisionFile {
    path: String,
    sha256: String,
}
