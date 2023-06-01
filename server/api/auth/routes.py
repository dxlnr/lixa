"""Auth API Endpoints"""
import os
from collections import defaultdict

from flask import Blueprint, jsonify, request
from flask_cors import cross_origin

from db import env

auth_blueprint = Blueprint("auth", __name__)


@auth_blueprint.route("/callback", methods=["GET", "POST"])
@cross_origin(supports_credentials=True)
def callback():
    token = oauth.auth0.authorize_access_token()
    session["user"] = token
    return redirect("/")


@auth_blueprint.route("/login")
def login():
    return oauth.auth0.authorize_redirect(
        redirect_uri=url_for("callback", _external=True)
    )


@auth_blueprint.route("/logout")
def logout():
    session.clear()
    return redirect(
        "https://"
        + env.AUTH0_DOMAIN
        + "/v2/logout?"
        + urlencode(
            {
                "returnTo": url_for("home", _external=True),
                "client_id": env.AUTH0_CLIENT_ID,
            },
            quote_via=quote_plus,
        )
    )
