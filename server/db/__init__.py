"""Database Proxy"""
from pymongo import MongoClient

client = MongoClient(host="localhost", port=27017)
db = client["lixaDBTest"]