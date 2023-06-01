"""Database Proxy"""
import os
from pathlib import Path
from pymongo import MongoClient
from .env import Env

envars = Path().cwd() / ".env"
env = Env()
env.merge_from_file(envars)

client = MongoClient(env.get_uri_mongodb())
db = client["Cluster0"]
