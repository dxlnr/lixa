"""Brand API Endpoints"""
from flask import Blueprint, jsonify, request
from flask_cors import cross_origin

from db import db

brand_blueprint = Blueprint('brand', __name__)
cbrands = db["brands"]


@brand_blueprint.route('/create_brand', methods = ['POST','OPTIONS'])
@cross_origin(supports_credentials=True)
def create_brand():
    r"""Instantiates new brand for user and writes it to mongodb table."""
    print("jooo")
    j = request.get_json()
    print(j)
    b = { "name": j["name"], "industry": j["industry"] }
    cbrands.insert_one(b)
    return ''
