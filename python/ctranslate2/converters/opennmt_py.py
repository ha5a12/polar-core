from ctranslate2.converters import utils
from ctranslate2.converters.converter import Converter
from ctranslate2.specs import catalog, transformer_spec


class OpenNMTPyConverter(Converter):
    """Converts models generated by OpenNMT-py."""

    def __init__(self, model_path):
        self._model_path = model_path

    def _save_vocabulary(self, vocab, output_path):
        with open(output_path, "wb") as output_file:
            for word in vocab.itos:
                word = word.encode("utf-8")
                output_file.write(word)
                output_file.write(b"\n")

    def _load(self, model_spec):
        import torch
        checkpoint = torch.load(self._model_path, map_location="cpu")
        variables = checkpoint["model"]
        variables["generator.weight"] = checkpoint["generator"]["0.weight"]
        variables["generator.bias"] = checkpoint["generator"]["0.bias"]
        if isinstance(model_spec, (catalog.TransformerBase, catalog.TransformerBig)):
            set_transformer_spec(model_spec, variables)
        else:
            raise NotImplementedError()
        vocab = checkpoint["vocab"]
        return vocab[0][1], vocab[1][1]


def set_transformer_spec(spec, variables):
    set_transformer_encoder(spec.encoder, variables)
    set_transformer_decoder(spec.decoder, variables)

def set_transformer_encoder(spec, variables):
    set_layer_norm(spec.layer_norm, variables, "encoder.layer_norm")
    set_embeddings(
        spec.embeddings, variables, "encoder.embeddings.make_embedding.emb_luts.0")
    set_position_encodings(
        spec.position_encodings, variables, "encoder.embeddings.make_embedding.pe")
    for i, layer in enumerate(spec.layer):
        set_transformer_encoder_layer(layer, variables, "encoder.transformer.%d" % i)

def set_transformer_decoder(spec, variables):
    set_linear(spec.projection, variables, "generator")
    set_layer_norm(spec.layer_norm, variables, "decoder.layer_norm")
    set_embeddings(
        spec.embeddings, variables, "decoder.embeddings.make_embedding.emb_luts.0")
    set_position_encodings(
        spec.position_encodings, variables, "decoder.embeddings.make_embedding.pe")
    for i, layer in enumerate(spec.layer):
        set_transformer_decoder_layer(layer, variables, "decoder.transformer_layers.%d" % i)

def set_transformer_encoder_layer(spec, variables, scope):
    set_ffn(spec.ffn, variables, "%s.feed_forward" % scope)
    set_multi_head_attention(
        spec.self_attention, variables, "%s.self_attn" % scope, self_attention=True)
    set_layer_norm(spec.self_attention.layer_norm, variables, "%s.layer_norm" % scope)

def set_transformer_decoder_layer(spec, variables, scope):
    set_ffn(spec.ffn, variables, "%s.feed_forward" % scope)
    set_multi_head_attention(
        spec.self_attention, variables, "%s.self_attn" % scope, self_attention=True)
    set_layer_norm(spec.self_attention.layer_norm, variables, "%s.layer_norm_1" % scope)
    set_multi_head_attention(spec.attention, variables, "%s.context_attn" % scope)
    set_layer_norm(spec.attention.layer_norm, variables, "%s.layer_norm_2" % scope)

def set_ffn(spec, variables, scope):
    set_layer_norm(spec.layer_norm, variables, "%s.layer_norm" % scope)
    set_linear(spec.linear_0, variables, "%s.w_1" % scope)
    set_linear(spec.linear_1, variables, "%s.w_2" % scope)

def set_multi_head_attention(spec, variables, scope, self_attention=False):
    if self_attention:
        split_layers = [transformer_spec.LinearSpec() for _ in range(3)]
        set_linear(split_layers[0], variables, "%s.linear_query" % scope)
        set_linear(split_layers[1], variables, "%s.linear_keys" % scope)
        set_linear(split_layers[2], variables, "%s.linear_values" % scope)
        utils.fuse_linear(spec.linear[0], split_layers)
    else:
        set_linear(spec.linear[0], variables, "%s.linear_query" % scope)
        split_layers = [transformer_spec.LinearSpec() for _ in range(2)]
        set_linear(split_layers[0], variables, "%s.linear_keys" % scope)
        set_linear(split_layers[1], variables, "%s.linear_values" % scope)
        utils.fuse_linear(spec.linear[1], split_layers)
    set_linear(spec.linear[-1], variables, "%s.final_linear" % scope)

def set_layer_norm(spec, variables, scope):
    try:
        spec.gamma = _get_variable(variables, "%s.weight" % scope)
        spec.beta = _get_variable(variables, "%s.bias" % scope)
    except:
        # Compatibility with older models using a custom LayerNorm module.
        spec.gamma = _get_variable(variables, "%s.a_2" % scope)
        spec.beta = _get_variable(variables, "%s.b_2" % scope)

def set_linear(spec, variables, scope):
    spec.weight = _get_variable(variables, "%s.weight" % scope)
    spec.bias = _get_variable(variables, "%s.bias" % scope)

def set_embeddings(spec, variables, scope):
    spec.weight = _get_variable(variables, "%s.weight" % scope)

def set_position_encodings(spec, variables, scope):
    spec.encodings = _get_variable(variables, "%s.pe" % scope).squeeze()



def _get_variable(variables, name):
    return variables[name].numpy()
