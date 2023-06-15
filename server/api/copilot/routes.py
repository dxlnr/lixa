"""Copilot handling prompts."""
import io
import os
from http import HTTPStatus

import torch
from flask import Blueprint, jsonify, request, send_file
from flask_cors import cross_origin
from utils.helpers import get_project_root
from werkzeug.utils import secure_filename

from db import db, minio_client
from db.minio import push_to_s3

from .ldms import txt2img

copilot_blueprint = Blueprint("copilot", __name__)
ccollection = db["collection"]
s3_bucket = "lixa-collection"


@copilot_blueprint.route("/prompt", methods=["POST", "OPTIONS"])
@cross_origin(supports_credentials=True)
def prompt():
    r"""."""
    j = request.get_json()
    p = j["prompt"]

    # model_path = os.path.join(get_project_root(), 'zoo/models/')
    pil_img = txt2img(p)

    # serve the image.
    img_io = io.BytesIO()
    pil_img.save(img_io, "JPEG", quality=100)
    img_io.seek(0)

    # Free GPU resources.
    torch.cuda.empty_cache()
    return send_file(img_io, mimetype="image/jpeg")


@copilot_blueprint.route("/save_image/<string:user_email>", methods=["POST", "OPTIONS"])
@cross_origin(supports_credentials=True)
def save_image(user_email: str):
    r"""."""
    if "im" not in request.files:
        return "No image part", 400
    file = request.files["im"]
    if file.filename == "":
        return "No selected file", 400
    if file:
        filename = secure_filename(file.filename)
        size = os.fstat(file.fileno()).st_size

        minio_client.put_object(s3_bucket, filename, file, size)
        ccollection.insert_one({"im": filename, "user": user_email})
        return "Image uploaded!", 200
