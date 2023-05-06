"""Copilot handling prompts."""
import os
from http import HTTPStatus
from flask import Blueprint, request, jsonify
from flask_cors import cross_origin

from .ldms import txt2img 
from utils.helpers import get_project_root

copilot_blueprint = Blueprint('copilot', __name__)

@copilot_blueprint.route('/prompt', methods = ['POST', 'OPTIONS'])
@cross_origin(supports_credentials=True)
def prompt():
    r"""."""
    j = request.get_json()
    p = j['prompt']

    model_path = os.path.join(get_project_root(), 'zoo/models/sd-v1-1-4.ckpt')
    print(model_path)
    ing = txt2img(p, model_path, 'cpu') 

    return jsonify({'success': 'ok'})
