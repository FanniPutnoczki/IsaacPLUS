from flask import Blueprint
import connection

notif_api = Blueprint('notif_api', __name__)

notifs = connection.mongo.isaac.notifications

@notif_api.route('/add')
def add(notif):
    notifs.insert_one(notif)
    return {"he": "he"}

@notif_api.route('/remove')
def remove():
    return {"he": "he"}

@notif_api.route('/get/<id>')
def getOne(id):
    return notifs

@notif_api.route('/get')
def getAll():
    print (notifs.count())
    return {"he": "he"}