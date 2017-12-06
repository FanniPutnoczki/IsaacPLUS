from flask import Blueprint

skills_api = Blueprint('skills_api', __name__)


@skills_api.route('/enable')
def enable():
    return {"he": "he"}

@skills_api.route('/get')
def getAll():
    return {"he": "he"}