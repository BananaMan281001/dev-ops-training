from flask import Blueprint, jsonify
from .services import services_data

routes = Blueprint('routes', __name__)

@routes.route("/")
def home():
    return {"message": "Its working!"}

@routes.route("/api/health", methods=['GET'])
def health_check():
    return jsonify({'status': 'ok'})

@routes.route("/api/services")
def get_services():
    return jsonify(services_data)