from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify(message="Welcome to the backend!")
CORS(app)
