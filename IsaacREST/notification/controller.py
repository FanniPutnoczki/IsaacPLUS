from flask import Blueprint

notif_api = Blueprint('notif_api', __name__)

@notif_api.route('/add')
def add():
    return {"he": "he"}

@notif_api.route('/remove')
def remove():
    return {"he": "he"}

@notif_api.route('/get/<id>')
def get(id):
    return id

@notif_api.route('/get')
def getAll():
    return {"he": "he"}