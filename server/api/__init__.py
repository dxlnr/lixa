"""API Entrypoint"""
from flask import Blueprint

api_blueprint = Blueprint("api_blueprint", __name__)


@api_blueprint.route("/")
def index():
    return "lixa api routes available."
