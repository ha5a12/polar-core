#include "engine.h"

#include <functional>
#include <vector>

#include <ggml.h>
#include <llama.h>

namespace tabby {
TextInferenceEngine::~TextInferenceEngine() {}

namespace {
template<class T>
using owned = std::unique_ptr<T, std::function<void(T*)>>;

std::vector<llama_token> tokenize(struct llama_context * ctx, const std::string & text, bool add_bos) {
    // upper limit for the number of tokens
    int n_tokens = text.length() + add_bos;
    std::vector<llama_token> result(n_tokens);
    n_tokens = llama_tokenize(ctx, text.c_str(), result.data(), result.size(), add_bos);
    if (n_tokens < 0) {
        result.resize(-n_tokens);
        int check = llama_tokenize(ctx, text.c_str(), result.data(), result.size(), add_bos);
        GGML_ASSERT(check == -n_tokens);
    } else {
        result.resize(n_tokens);
    }
    return result;
}

std::string llama_token_to_piece(const struct llama_context * ctx, llama_token token) {
    std::vector<char> result(8, 0);
    const int n_tokens = llama_token_to_piece(ctx, token, result.data(), result.size());
    if (n_tokens < 0) {
        result.resize(-n_tokens);
        int check = llama_token_to_piece(ctx, token, result.data(), result.size());
        GGML_ASSERT(check == -n_tokens);
    } else {
        result.resize(n_tokens);
    }

    return std::string(result.data(), result.size());
}

class TextInferenceEngineImpl : public TextInferenceEngine {
 public:
  TextInferenceEngineImpl(owned<llama_model> model, owned<llama_context> ctx) :
    model_(std::move(model)),
    ctx_(std::move(ctx)) {
  }

  rust::Vec<uint32_t> inference(
      const rust::Str prompt,
      size_t max_decoding_length,
      float sampling_temperature
  ) const override {
    auto* ctx = ctx_.get();
    std::vector<llama_token> tokens_list = tokenize(ctx, std::string(prompt), true);

    rust::Vec<uint32_t> ret;
    for (size_t n_remain = max_decoding_length; n_remain > 0; --n_remain) {
      if (llama_eval(
            ctx,
            tokens_list.data(),
            tokens_list.size(),
            llama_get_kv_cache_token_count(ctx),
            /* n_threads = */ 1)) {
        fprintf(stderr, "%s : failed to eval\n", __func__);
        return {};
      }

      tokens_list.clear();

      auto logits = llama_get_logits(ctx);
      auto n_vocab = llama_n_vocab(ctx);

      std::vector<llama_token_data> candidates;
      candidates.reserve(n_vocab);
      for (llama_token token_id = 0; token_id < n_vocab; ++token_id) {
        candidates.emplace_back(llama_token_data{token_id, logits[token_id], 0.0f});
      }

      llama_token_data_array candidates_p = { candidates.data(), candidates.size(), false };

      llama_token new_token_id = llama_sample_token_greedy(ctx , &candidates_p);

      if (new_token_id == llama_token_eos(ctx)) {
        break;
      }

      printf("%s", llama_token_to_piece(ctx, new_token_id).c_str());
      // fprintf(stderr, "Next Token: %d, remaining: %d\n", new_token_id, n_remain);
      tokens_list.push_back(new_token_id);
      ret.push_back(new_token_id);
    }

    return ret;
  }

 private:
  owned<llama_model> model_;
  owned<llama_context> ctx_;
};

struct BackendInitializer {
  BackendInitializer() {
    llama_backend_init(false);
  }

  ~BackendInitializer() {
    llama_backend_free();
  }
};
} // namespace

std::shared_ptr<TextInferenceEngine> create_engine(rust::Str model_path) {
  static BackendInitializer initializer;

  llama_context_params ctx_params = llama_context_default_params();
  ctx_params.n_gpu_layers = 4;

  llama_model* model = llama_load_model_from_file(std::string(model_path).c_str(), ctx_params);

  if (!model) {
    fprintf(stderr , "%s: error: unable to load model\n" , __func__);
    return nullptr;
  }

  llama_context* ctx = llama_new_context_with_model(model, ctx_params);

  return std::make_unique<TextInferenceEngineImpl>(
      owned<llama_model>(model, llama_free_model),
      owned<llama_context>(ctx, llama_free)
  );
}

}  // namespace tabby
