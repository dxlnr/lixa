"""Latent Diffusion Models."""
import torch
from diffusers import DiffusionPipeline


def txt2img(prompt: str, model_path: str, device: str = 'cuda'):
    """Inference for text-to-image model."""
    p = DiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5")
    p = p.to(device)
    image = p(prompt).images[0]

    return image
