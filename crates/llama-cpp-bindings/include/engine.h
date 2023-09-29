#pragma once

#include "rust/cxx.h"
#include <memory>

namespace llama {

class TextInferenceEngine {
 public:
  virtual ~TextInferenceEngine();

  virtual std::unique_ptr<std::vector<uint32_t>> start(const rust::Str prompt, size_t max_input_length) const = 0;
  virtual uint32_t step() const = 0;
  virtual void end() const = 0;

  virtual uint32_t eos_token() const = 0;
};

std::shared_ptr<TextInferenceEngine> create_engine(rust::Str model_path);
}  // namespace
