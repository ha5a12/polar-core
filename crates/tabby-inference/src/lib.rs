//! Lays out the abstract definition of a text generation model, and utilities for encodings.
pub mod chat;
mod decoding;
mod imp;


use async_trait::async_trait;
use derive_builder::Builder;
use futures::{stream::BoxStream, StreamExt};
use imp::TextGenerationImpl;
use tabby_common::languages::Language;

#[derive(Builder, Debug)]
pub struct TextGenerationOptions {
    #[builder(default = "1024")]
    pub max_input_length: usize,

    #[builder(default = "256")]
    pub max_decoding_length: usize,

    #[builder(default = "0.1")]
    pub sampling_temperature: f32,

    #[builder(default = "TextGenerationOptions::default_seed()")]
    pub seed: u64,

    #[builder(default = "None")]
    pub language: Option<&'static Language>,
}

impl TextGenerationOptions {
    pub fn default_seed() -> u64 {
        std::time::SystemTime::now()
            .duration_since(std::time::UNIX_EPOCH)
            .map(|x| x.as_millis() as u64)
            .unwrap_or_default()
    }
}

#[async_trait]
pub trait TextGenerationStream: Sync + Send {
    async fn generate(&self, prompt: &str, options: TextGenerationOptions) -> BoxStream<String>;
}

#[async_trait]
pub trait TextGeneration: Sync + Send {
    async fn generate_stream(
        &self,
        prompt: &str,
        options: TextGenerationOptions,
    ) -> BoxStream<(bool, String)>;
}

pub fn make_text_generation(imp: impl TextGenerationStream) -> impl TextGeneration {
    TextGenerationImpl::new(imp)
}
