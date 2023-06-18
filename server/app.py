"""Server Runtime Entrypoint"""
import logging

from api import api_blueprint
from api.brand.routes import brand_blueprint
from api.copilot.routes import copilot_blueprint
from flask import Flask, Response, request, session, url_for, redirect
from flask_cors import CORS, cross_origin
from pymongo import MongoClient
from authlib.integrations.flask_client import OAuth

from db import db, env

app = Flask(__name__)
app.config["CORS_HEADERS"] = "Content-Type"
app.secret_key = env.AUTH0_SECRET_KEY
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

# authentication via auth0
oauth = OAuth(app)
oauth.register(
    "auth0",
    client_id=env.AUTH0_CLIENT_ID,
    client_secret=env.AUTH0_CLIENT_SECRET,
    client_kwargs={
        "scope": "openid profile email",
    },
    server_metadata_url=f"https://{env.AUTH0_DOMAIN}/.well-known/openid-configuration",
)

api_blueprint.register_blueprint(brand_blueprint, url_prefix="/brand")
api_blueprint.register_blueprint(copilot_blueprint, url_prefix="/copilot")
app.register_blueprint(api_blueprint, url_prefix="/api")


@app.route("/")
def check():
    return "lixa backend up and running."


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True, threaded=True)
