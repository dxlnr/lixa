"""Latent Diffusion Models."""
import torch
from diffusers import DiffusionPipeline


def txt2img(
    prompt: str,
    model_path: str = "runwayml/stable-diffusion-v1-5",
    device: str = "cuda",
):
    """Inference for text-to-image model."""
    p = DiffusionPipeline.from_pretrained(model_path)
    p = p.to(device)

    img = p(prompt).images[0]

    return img
