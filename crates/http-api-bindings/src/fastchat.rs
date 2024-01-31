use anyhow::{anyhow, Result};
use async_trait::async_trait;
use futures::stream::BoxStream;
use reqwest::header;
use serde::{Deserialize, Serialize};
use serde_json::Value;
use tabby_inference::{helpers, TextGeneration, TextGenerationOptions};
use tracing::warn;

#[derive(Serialize)]
struct Request {
    model: String,
    prompt: Vec<String>,
    max_tokens: usize,
    temperature: f32,
    stop: Vec<String>,
}

#[derive(Deserialize)]
struct Response {
    choices: Vec<Prediction>,
}

#[derive(Deserialize)]
struct Prediction {
    text: String,
}

pub struct FastChatEngine {
    client: reqwest::Client,
    api_endpoint: String,
    model_name: String,
}

impl FastChatEngine {
    pub fn create(api_endpoint: &str, model_name: &str, authorization: Option<String>) -> Self {
        let mut headers = reqwest::header::HeaderMap::new();
        if let Some(authorization) = authorization {
            headers.insert(
                "Authorization",
                header::HeaderValue::from_str(&authorization)
                    .expect("Failed to create authorization header"),
            );
        }
        let client = reqwest::Client::builder()
            .default_headers(headers)
            .build()
            .expect("Failed to construct HTTP client");
        Self {
            api_endpoint: api_endpoint.to_owned(),
            model_name: model_name.to_owned(),
            client,
        }
    }

    async fn generate_impl(&self, prompt: &str, options: TextGenerationOptions) -> Result<String> {
        let stop = vec!["\n\n".to_owned()];

        // create a request
        

        let request = Request {
            model: self.model_name.to_owned(),
            prompt: vec![prompt.to_string()],
            max_tokens: options.max_decoding_length,
            temperature: options.sampling_temperature,
            stop,
        };
        println!("prompt, {:?}", &prompt);

        // API Documentation: https://github.com/lm-sys/FastChat/blob/main/docs/openai_api.md
        let resp = self
            .client
            .post(&self.api_endpoint)
            .json(&request)
            .send()
            .await?;

        if resp.status() != 200 {
            let err: Value = resp.json().await.expect("Failed to parse response");
            return Err(anyhow!("Request failed: {}", err));
        }

        let resp: Response = resp.json().await.expect("Failed to parse response");

        println!("resp\n{}", &resp.choices[0].text);
        Ok(resp.choices[0].text.clone())
    }
}

#[async_trait]
impl TextGeneration for FastChatEngine {
    async fn generate(&self, prompt: &str, options: TextGenerationOptions) -> String {
        match self.generate_impl(prompt, options).await {
            Ok(output) => output,
            Err(err) => {
                warn!("Failed to generate completion: `{}`", err);
                String::new()
            }
        }
    }

    async fn generate_stream(
        &self,
        prompt: &str,
        options: TextGenerationOptions,
    ) -> BoxStream<String> {
        helpers::string_to_stream(self.generate(prompt, options).await).await
    }
}
