from flask import Flask
from api import api_blueprint

app = Flask(__name__)
app.register_blueprint(api_blueprint, url_prefix='/api')

@app.route('/')
def check():
    return 'lixa backend up and running.'

app.run(host="0.0.0.0", port=5000, debug=True)
