import logging

from flask import Flask, Response, request
from flask_cors import CORS
from api import api_blueprint
from api.copilot.routes import copilot_blueprint 

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)

api_blueprint.register_blueprint(copilot_blueprint, url_prefix='/copilot')
app.register_blueprint(api_blueprint, url_prefix='/api')


@app.route('/')
def check():
    return 'lixa backend up and running.'


@app.before_request
def basic_authentication():
    if request.method.lower() == 'options':
        return Response()

app.run(host="0.0.0.0", port=5000, debug=True)
