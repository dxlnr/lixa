"""Server Runtime Entrypoint"""
import logging

from api import api_blueprint
from api.brand.routes import brand_blueprint
from api.copilot.routes import copilot_blueprint
from flask import Flask, Response, request
from flask_cors import CORS
from pymongo import MongoClient

from db import db

app = Flask(__name__)
app.config["CORS_HEADERS"] = "Content-Type"
CORS(app)

api_blueprint.register_blueprint(brand_blueprint, url_prefix="/brand")
api_blueprint.register_blueprint(copilot_blueprint, url_prefix="/copilot")
app.register_blueprint(api_blueprint, url_prefix="/api")


@app.route("/")
def check():
    return "lixa backend up and running."


@app.before_request
def basic_authentication():
    if request.method.lower() == "options":
        return Response()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
