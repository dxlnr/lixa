"""Copilot handling prompts."""
from http import HTTPStatus
from flask import Blueprint, request, jsonify
from flask_cors import cross_origin

copilot_blueprint = Blueprint('copilot', __name__)

@copilot_blueprint.route('/prompt', methods = ['POST', 'OPTIONS'])
@cross_origin(supports_credentials=True)
def prompt():
    r"""."""
    j = request.get_json()
    print("got : ", j)
    return jsonify({'success': 'ok'})
