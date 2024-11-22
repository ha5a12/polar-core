mod llama;
mod openai;
mod voyage;

use core::panic;
use std::sync::Arc;

use llama::LlamaCppEngine;
use tabby_common::config::HttpModelConfig;
use tabby_inference::Embedding;

use self::{openai::OpenAIEmbeddingEngine, voyage::VoyageEmbeddingEngine};

pub async fn create(config: &HttpModelConfig) -> Arc<dyn Embedding> {
    let (num_request, per) = match &config.request_limit {
        Some(limit) => (limit.num_request, limit.per),
        _ => (0, 0),
    };

    match config.kind.as_str() {
        "llama.cpp/embedding" => {
            let engine = LlamaCppEngine::create(
                config
                    .api_endpoint
                    .as_deref()
                    .expect("api_endpoint is required"),
                config.api_key.clone(),
                num_request,
                per,
            );
            Arc::new(engine)
        }
        "openai/embedding" => {
            let engine = OpenAIEmbeddingEngine::create(
                config
                    .api_endpoint
                    .as_deref()
                    .expect("api_endpoint is required"),
                config.model_name.as_deref().unwrap_or_default(),
                config.api_key.as_deref(),
            );
            Arc::new(engine)
        }
        "ollama/embedding" => ollama_api_bindings::create_embedding(config).await,
        "voyage/embedding" => {
            let engine = VoyageEmbeddingEngine::create(
                config.api_endpoint.as_deref(),
                config
                    .model_name
                    .as_deref()
                    .expect("model_name must be set for voyage/embedding"),
                config
                    .api_key
                    .clone()
                    .expect("api_key must be set for voyage/embedding"),
            );
            Arc::new(engine)
        }
        unsupported_kind => panic!(
            "Unsupported kind for http embedding model: {}",
            unsupported_kind
        ),
    }
}
