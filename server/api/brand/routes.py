"""Brand API Endpoints"""
import os
import json
from collections import defaultdict

from flask import Blueprint, jsonify, request, send_file 
from flask_cors import cross_origin
from werkzeug.utils import secure_filename
from bson import json_util

from utils.helpers import get_project_root
from db import db

brand_blueprint = Blueprint("brand", __name__)
cbrands = db["brands"]
clogos = db["logos"]


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
    target = os.path.join(get_project_root(), "logos/")
    if not os.path.isdir(target):
        os.mkdir(target)
    if request.method == "POST":
        if "im" in request.files:
            upload = request.files["im"]
            filename = secure_filename(upload.filename)
            destination = "/".join([target, filename])
            upload.save(destination)
            cbrands.find_one_and_update(
                {"name": brand_name}, {"$set": {"logo": destination}}
            )
        else:
            return "No Image found.", 404

        return "Image Upload Successfully", 200


@brand_blueprint.route("/get_brand/<string:user_email>", methods=["GET"])
@cross_origin(supports_credentials=True)
def get_brand(user_email: str):
    r"""Instantiates new brand for user and writes it to mongodb table."""
    b = cbrands.find_one({"user": user_email})
    print(b)
    if b:
        return json.loads(json_util.dumps(b)), 200
    else:
        return None, 204


@brand_blueprint.route("/get_brand_logo/<string:logo_url>", methods=["GET"])
@cross_origin(supports_credentials=True)
def get_brand_logo(logo_url: str):
    r"""Instantiates new brand for user and writes it to mongodb table."""
    target = os.path.join(get_project_root(), "logos/")
    try:
        url = os.path.join(target, logo_url)
        return send_file(url), 200 
    except:
        return None, 204
