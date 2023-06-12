"""Database Proxy"""
import os
from pathlib import Path
from pymongo import MongoClient
from .env import Env
from .minio import init_minio_client

envars = Path().cwd() / ".env"
env = Env()
env.merge_from_file(envars)

client = MongoClient(env.get_uri_mongodb())
db = client["Cluster0"]

# minio to s3 proxy
endpoint, access_key, secret_key, region = env.get_minio_essentials()
minio_client = init_minio_client(endpoint, access_key, secret_key, region, secure=False)
