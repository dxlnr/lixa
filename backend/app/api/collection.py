"""Collection API Endpoints"""
from fastapi import File, Form, UploadFile, APIRouter, HTTPException

collection_router = APIRouter()
cccollection = db["collection"]
s3_bucket = "lixa-collection"


@collection_router.get("/api/collection/get_collection/{user}")
def get_collection(user: str):
    r"""."""
    # cs = ccollection.find_all({"user": user_email})
    pass
