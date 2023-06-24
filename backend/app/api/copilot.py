"""Copilot Enpoints"""
import io
import json
import os
from typing import Optional

from fastapi import File, Form, UploadFile, APIRouter, HTTPException
import torch

from db import db, minio_client
from db.minio import push_bytes_to_s3, get_s3_obj_url
from ml.ldms import txt2img
from utils.helpers import str_from_email

copilot_router = APIRouter()
ccollection = db["collection"]
s3_bucket = "lixa-collection"


@copilot_router.post("/api/copilot/prompt")
def prompt(input: str = Form(...)):
    r"""."""
    j = json.loads(input)
    p = j["prompt"]

    # call inference function.
    pil_img = txt2img(p)

    # serve the image.
    img_io = io.BytesIO()
    pil_img.save(img_io, "JPEG", quality=100)
    img_io.seek(0)

    # Free GPU resources.
    torch.cuda.empty_cache()
    return send_file(img_io, mimetype="image/jpeg")


@copilot_router.post("/api/copilot/save_image")
def save_image(info: str = Form(...), file: Optional[UploadFile] = File(None)):
    """."""
    c = json.loads(info)

    if file:
        file_content = await file.read()
        filename = f"{str_from_email(c['user'])}_{int(time.time())}.jpg"
        push_bytes_to_s3(minio_client, s3_bucket, filename, file_content, file.content_type)
        c.update({"logo": get_s3_obj_url(s3_bucket, filename)})
    else:
        raise HTTPException(status_code=404, detail="No image found therefore nothing to store.")

    ccollection.insert_one(c)
    return {"status": "success"}
