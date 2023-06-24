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


class Brand(BaseModel):
    name: str
    location: str | None = None
    profession: str | None = None
    website: str | None = None
    instagram: str | None = None
    tiktok: str | None = None
    twitter: str | None = None
    user: str
    logo: str | None = None
