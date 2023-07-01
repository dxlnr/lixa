"""Database Proxy"""
import asyncio
import os
from pathlib import Path

from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.server_api import ServerApi
from utils.env import Env
from utils.minio import init_minio_client

envars = Path().cwd() / ".env"
env = Env()
env.merge_from_file(envars)

client = AsyncIOMotorClient(env.get_uri_mongodb(), server_api=ServerApi("1"))
db = client["Cluster0"]

# minio to s3 proxy
endpoint, access_key, secret_key, region = env.get_minio_essentials()
minio_client = init_minio_client(endpoint, access_key, secret_key, region, secure=False)

from pydantic import BaseModel


# Data Models Section
class Brand(BaseModel):
    """Custom Brand Data model which will be stored to db."""

    name: str
    location: str | None = None
    profession: str | None = None
    website: str | None = None
    instagram: str | None = None
    tiktok: str | None = None
    twitter: str | None = None
    user: str
    logo: str | None = None


class LLamaInput(BaseModel):
    """Defines the input model for the language model."""

    prompts: list[str]
    max_gen_len: int = 250
    temperature: float = 0.8
    top_p: float = 0.95
