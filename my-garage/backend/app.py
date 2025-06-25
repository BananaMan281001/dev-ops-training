from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend to talk to backend

@app.route("/")
def home():
    return {"message": "Welcome to My Garage API!"}

@app.route("/api/mods", methods=["GET"])
def get_mods():
    return {"mods": []}  # Placeholder for now

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)