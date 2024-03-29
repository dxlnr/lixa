"""Brand API Endpoints"""
import json
import time
from typing import Optional

from bson import json_util
from db import db, minio_client
from fastapi import APIRouter, File, Form, HTTPException, UploadFile
from utils.minio import get_s3_obj_url, push_bytes_to_s3
from werkzeug.utils import secure_filename

brand_router = APIRouter()
cbrands = db["brands"]
s3_bucket = "lixa-logos"


@brand_router.post("/api/brand/create_brand")
async def create_brand(info: str = Form(...), file: Optional[UploadFile] = File(None)):
    """."""
    brand_data = json.loads(info)

    if file:
        file_content = await file.read()
        filename = f"{int(time.time())}_{secure_filename(file.filename)}"
        push_bytes_to_s3(
            minio_client, s3_bucket, filename, file_content, file.content_type
        )
        brand_data.update({"logo": get_s3_obj_url(s3_bucket, filename)})

    r = await cbrands.insert_one(brand_data)
    return {"status": "success"}


@brand_router.post("/api/brand/update_brand")
async def update_brand(form: str = Form(...)):
    """Handles the upload of a brand logo.

    :param form: Dict in the form ['$upd': ..., 'user': $userEmail]
    """
    upd = json.loads(form)
    user = upd.pop("user")
    try:
        b = await cbrands.find_one({"user": user})
    except:
        return {"status": "No user found."}
    cbrands.update_one(b, {"$set": upd})

    return {"status": "success"}


@brand_router.get("/api/brand/get_brand/{user}")
async def get_brand(user):
    """Returns brand document.

    :param user: Fins a user based on their email string.
    """
    try:
        b = await cbrands.find_one({"user": user})
    except:
        raise HTTPException(404, "No user found.")
    return json.loads(json_util.dumps(b))
