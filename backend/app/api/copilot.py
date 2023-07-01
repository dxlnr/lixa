"""Copilot Enpoints"""
import io
import json
import os
import time
from typing import Optional

import torch
from db import db, minio_client
from fastapi import APIRouter, File, Form, HTTPException, UploadFile
from fastapi.responses import Response, StreamingResponse
from ml.ldms import txt2img
from ml.llm import generator
from utils.helpers import str_from_email
from utils.minio import get_s3_obj_url, push_bytes_to_s3

copilot_router = APIRouter()
ccollection = db["collection"]
s3_bucket = "lixa-collection"


@copilot_router.post("/api/copilot/create_image")
async def create_image(prompt: str = Form(...)):
    r"""."""
    # call inference function.
    pil_img = txt2img(prompt)

    # serve the image.
    img_io = io.BytesIO()
    pil_img.save(img_io, "JPEG", quality=100)
    img_io.seek(0)
    img_bytes = img_io.getvalue()

    # Free GPU resources.
    torch.cuda.empty_cache()
    return Response(img_bytes, media_type="image/jpeg")


@copilot_router.post("/api/copilot/save_image")
async def save_image(user: str = Form(...), file: Optional[UploadFile] = File(None)):
    """."""
    c = {"user": user}

    if file:
        file_content = await file.read()
        filename = f"{str_from_email(user)}_{int(time.time())}.jpg"
        push_bytes_to_s3(
            minio_client, s3_bucket, filename, file_content, file.content_type
        )
        c.update({"im": get_s3_obj_url(s3_bucket, filename)})
    else:
        raise HTTPException(
            status_code=404, detail="No image found therefore nothing to store."
        )

    ccollection.insert_one(c)
    return {"status": "success"}


@copilot_router.get("/api/copilot/suggest_prompts")
async def suggest_prompts():
    """."""
    prompt = "Can you please suggest me a prompt for a generative AI model that \
             should create an image that advertises a product for the company Nike."

    results = generator.generate(
        prompt,
        max_gen_len=250,
        temperature=0.8,
        top_p=0.95,
    )

    #     def fake_large_file():
    #         for i in range(12):
    #             time.sleep(0.25)
    #             yield f"This is line {i}\n"

    # return StreamingResponse(fake_large_file(), media_type="text/event-stream")
    return StreamingResponse(results, media_type="text/event-stream")


# @copilot_router.post("/api/copilot/llama/")
# async def generate(config: Config):
#     if len(config.prompts) > args.max_batch_size:
#         return {"error": "too much prompts."}
#     for prompt in config.prompts:
#         if len(prompt) + config.max_gen_len > args.max_seq_len:
#             return {"error": "max_gen_len too large."}
#     results = generator.generate(
#         config.prompts,
#         max_gen_len=config.max_gen_len,
#         temperature=config.temperature,
#         top_p=config.top_p,
#     )
#     return {"responses": results}
