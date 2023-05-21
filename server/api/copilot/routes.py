"""Copilot handling prompts."""
import io
import os
from http import HTTPStatus

from flask import Blueprint, jsonify, request, send_file
from flask_cors import cross_origin
from utils.helpers import get_project_root

from .ldms import txt2img

copilot_blueprint = Blueprint("copilot", __name__)


@copilot_blueprint.route("/prompt", methods=["POST", "OPTIONS"])
@cross_origin(supports_credentials=True)
def prompt():
    r"""."""
    j = request.get_json()
    p = j["prompt"]

    # model_path = os.path.join(get_project_root(), 'zoo/models/')
    # print(model_path)
    pil_img = txt2img(p)

    # serve the image.
    img_io = io.BytesIO()
    pil_img.save(img_io, "JPEG", quality=100)
    img_io.seek(0)
    return send_file(img_io, mimetype="image/jpeg")
