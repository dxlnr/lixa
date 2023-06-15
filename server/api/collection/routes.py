"""Collection API Endpoints"""
import os
import base64
import json
from PIL import Image

from flask import Blueprint, jsonify, request, send_file
from flask_cors import cross_origin
from bson import json_util

from db import db, minio_client
from db.minio import push_to_s3

collection_blueprint = Blueprint("collection", __name__)
cccollection = db["collection"]
s3_bucket = "lixa-collection"


@collection_blueprint.route("/get_collection/<string:user_email>", methods=["GET"])
@cross_origin(supports_credentials=True)
def get_collection(user_email: str):
    r"""."""
    cs = ccollection.find_all({"user": user_email})
    if cs:
        cards = json.loads(json_util.dumps(cs))
        # try:
        #     r = minio_client.get_object(s3_bucket, logo_url)
        #     data = r.read()
        #     user["image"] = base64.b64encode(data).decode("utf-8")
        # except FileNotFoundError:
        #     user["image"] = None
        # return jsonify(user)
        return "", 200
    else:
        return None, 204
