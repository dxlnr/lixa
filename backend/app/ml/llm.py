"""Handling Large Language Models"""
import os
import json
from pathlib import Path

from langchain.llms import LlamaCpp
import torch
from utils import get_project_root

from .llama import LLaMA, ModelArgs, Tokenizer, Transformer


def load(
    ckpt_dir: str,
    tokenizer_path: str,
    local_rank: int,
    world_size: int,
    max_seq_len: int,
    max_batch_size: int,
) -> LLaMA:
    checkpoints = sorted(Path(ckpt_dir).glob("*.pth"))
    assert world_size == len(
        checkpoints
    ), f"Loading a checkpoint for MP={len(checkpoints)} but world size is {world_size}"
    ckpt_path = checkpoints[local_rank]

    checkpoint = torch.load(ckpt_path, map_location="cpu")

    with open(Path(ckpt_dir) / "params.json", "r") as f:
        params = json.loads(f.read())

    model_args: ModelArgs = ModelArgs(
        max_seq_len=max_seq_len, max_batch_size=max_batch_size, **params
    )
    tokenizer = Tokenizer(model_path=tokenizer_path)
    model_args.vocab_size = tokenizer.n_words
    torch.set_default_tensor_type(torch.cuda.HalfTensor)
    model = Transformer(model_args).cuda().half()
    torch.set_default_tensor_type(torch.FloatTensor)
    model.load_state_dict(checkpoint, strict=False)
    generator = LLaMA(model, tokenizer)
    return generator


def init_generator(
    ckpt_dir: str,
    tokenizer_path: str,
    max_seq_len: int = 512,
    max_batch_size: int = 2,
):
    local_rank, world_size = 0, 1
    generator = load(
        ckpt_dir, tokenizer_path, local_rank, world_size, max_seq_len, max_batch_size
    )

    return generator

as 
# generator = init_generator(
#     ckpt_dir=os.path.join(get_project_root(), "ml/models/pyllama/models/7B"),
#     tokenizer_path=os.path.join(
#         get_project_root(), "ml/models/pyllama/models/tokenizer.model"
#     ),
# )


llamacpp = LlamaCpp(
    model_path=os.path.join(
        get_project_root(), "ml/models/pyllama/models/7B/ggml-model-f16.bin"
    ),
    temperature=0.5,
)
