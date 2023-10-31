#pragma once

#include "rust/cxx.h"
#include <memory>

namespace llama {
struct StepOutput;

class TextInferenceEngine {
 public:
  virtual ~TextInferenceEngine();

  virtual void add_request(uint32_t request_id, rust::Slice<const uint32_t> input_token_ids) = 0;
  virtual void stop_request(uint32_t request_id) = 0;
  virtual rust::Vec<StepOutput> step() = 0;
};

std::unique_ptr<TextInferenceEngine> create_engine(bool use_gpu, rust::Str model_path);
}  // namespace
