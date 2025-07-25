from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return {"message": "Its working!"}

@app.route("/api/mods", methods=["GET"])
def get_mods():
    return {"mods": []}  # Placeholder for now

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)