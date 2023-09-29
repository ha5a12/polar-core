use std::sync::Arc;

use async_stream::stream;
use async_trait::async_trait;
use derive_builder::Builder;
use ffi::create_engine;
use futures::{lock::Mutex, stream::BoxStream};
use stop_words::StopWords;
use tabby_inference::{helpers, TextGeneration, TextGenerationOptions};
use tokenizers::tokenizer::Tokenizer;

#[cxx::bridge(namespace = "llama")]
mod ffi {
    unsafe extern "C++" {
        include!("llama-cpp-bindings/include/engine.h");

        type TextInferenceEngine;

        fn create_engine(model_path: &str) -> SharedPtr<TextInferenceEngine>;

        fn start(&self, prompt: &str, max_input_length: usize) -> UniquePtr<CxxVector<u32>>;
        fn step(&self) -> u32;
        fn end(&self);

        fn eos_token(&self) -> u32;
    }
}

unsafe impl Send for ffi::TextInferenceEngine {}
unsafe impl Sync for ffi::TextInferenceEngine {}

#[derive(Builder, Debug)]
pub struct LlamaEngineOptions {
    model_path: String,
    tokenizer_path: String,
}

pub struct LlamaEngine {
    engine: Mutex<cxx::SharedPtr<ffi::TextInferenceEngine>>,
    tokenizer: Arc<Tokenizer>,
    stop_words: StopWords,
}

impl LlamaEngine {
    pub fn create(options: LlamaEngineOptions) -> Self {
        LlamaEngine {
            engine: Mutex::new(create_engine(&options.model_path)),
            tokenizer: Arc::new(Tokenizer::from_file(&options.tokenizer_path).unwrap()),
            stop_words: StopWords::default(),
        }
    }
}

#[async_trait]
impl TextGeneration for LlamaEngine {
    async fn generate(&self, prompt: &str, options: TextGenerationOptions) -> String {
        let s = self.generate_stream(prompt, options).await;
        helpers::stream_to_string(s).await
    }

    async fn generate_stream(
        &self,
        prompt: &str,
        options: TextGenerationOptions,
    ) -> BoxStream<String> {
        let prompt = prompt.to_owned();

        let s = stream! {
            let engine = self.engine.lock().await;
            let eos_token = engine.eos_token();

            let all_token_ids : Vec<u32> = engine.start(&prompt, options.max_input_length).iter().map(|x| x.to_owned()).collect();
            let mut decoding = self.stop_words.create_incremental_decoding(self.tokenizer.clone(), &all_token_ids, options.stop_words);
            let mut n_remains = options.max_decoding_length ;
            while n_remains > 0 {
                let next_token_id = engine.step();
                if next_token_id == eos_token {
                    break;
                }

                if let Some(new_text) = decoding.next_token(next_token_id) {
                    yield new_text;
                } else {
                    break;
                }

                n_remains -= 1;
            }

            engine.end();
        };

        Box::pin(s)
    }
}
