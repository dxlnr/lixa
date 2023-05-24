"""Brand API Endpoints"""
from collections import defaultdict

from flask import Blueprint, jsonify, request
from flask_cors import cross_origin

from db import db

brand_blueprint = Blueprint("brand", __name__)
cbrands = db["brands"]


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
