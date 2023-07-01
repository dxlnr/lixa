"""Collection API Endpoints"""
from db import db
from fastapi import APIRouter, File, Form, HTTPException, UploadFile

collection_router = APIRouter()
cccollection = db["collection"]
s3_bucket = "lixa-collection"


@collection_router.get("/api/collection/get_collection/{user}")
async def get_collection(user: str):
    r"""."""
    # cs = ccollection.find_all({"user": user_email})
    pass
