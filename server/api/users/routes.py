"""REST Enpoints for User Objects."""
from db.datamodels import User
from flask import Blueprint, jsonify, request

user_blueprint = Blueprint("users", __name__)


@user_blueprint.route("/", methods=["GET"])
def users():
    users = User.objects().first()
    if not users:
        return jsonify({"error": "No user data found."})
    else:
        return jsonify(users.to_json())
