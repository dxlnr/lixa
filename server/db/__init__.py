"""Database Proxy"""
import os
from pathlib import Path
from dotenv import find_dotenv, load_dotenv

from pymongo import MongoClient

from .env import DBEnv
from utils.helpers import get_project_root

basepath = Path()
basedir = str(basepath.cwd())
envars = basepath.cwd() / ".env"

env = DBEnv()
env.merge_from_file(envars)

client = MongoClient(env.get_uri_mongodb())
db = client["Cluster0"]
