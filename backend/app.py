from flask import Flask, jsonify
from flask_cors import CORS
from services import services_data

app = Flask(__name__)

@app.route("/")
def home():
    return {"message": "Its working!"}

@app.route("/api/services")
def get_services():
    return jsonify(services_data)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)