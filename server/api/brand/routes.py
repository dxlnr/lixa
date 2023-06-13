"""Brand API Endpoints"""
import os
import base64
import io
import json
from collections import defaultdict
from PIL import Image

from flask import Blueprint, jsonify, request, send_file
from flask_cors import cross_origin
from werkzeug.utils import secure_filename
from bson import json_util

from utils.helpers import get_project_root
from db import db, minio_client
from db.minio import push_to_s3

brand_blueprint = Blueprint("brand", __name__)
cbrands = db["brands"]
s3_bucket = "lixa-logos"


@brand_blueprint.route("/create_brand", methods=["POST", "OPTIONS"])
@cross_origin(supports_credentials=True)
def create_brand():
    r"""Instantiates new brand for user and writes it to mongodb table."""
    try:
        j = request.get_json()
    except:
        pass
    b = defaultdict(lambda: "")
    for k, v in j.items():
        b[k] = v
    cbrands.insert_one(b)
    return ""


@brand_blueprint.route("/brand_logo_upload/<string:brand_name>", methods=["POST"])
@cross_origin(supports_credentials=True)
def brand_logo_upload(brand_name: str) -> (str, int):
    """Handles the upload of a brand logo.

    :param brand_name: The key is used to identify the brand.
    """
    if request.method == "POST":
        if "im" in request.files:
            upload = request.files["im"]
            filename = secure_filename(upload.filename)
            size = os.fstat(upload.fileno()).st_size

            minio_client.put_object(s3_bucket, filename, upload, size)
            cbrands.find_one_and_update(
                {"name": brand_name}, {"$set": {"logo": filename}}
            )
        else:
            return "No Image found.", 404
        return "Image Upload Successfully", 200


@brand_blueprint.route("/get_brand/<string:user_email>", methods=["GET"])
@cross_origin(supports_credentials=True)
def get_brand(user_email: str):
    r"""Instantiates new brand for user and writes it to mongodb table."""
    b = cbrands.find_one({"user": user_email})
    if b:
        user = json.loads(json_util.dumps(b))
        try:
            logo_url = b["logo"]
            r = minio_client.get_object(s3_bucket, logo_url)
            data = r.read()
            user["image"] = base64.b64encode(data).decode("utf-8")
        except FileNotFoundError:
            user["image"] = None
        return jsonify(user)
    else:
        return None, 204
