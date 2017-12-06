from flask import Blueprint
import connection
import json

notifs = connection.mongo.isaac.notifications

notif_api = Blueprint('notif_api', __name__)

@notif_api.route('/add')
def add(notif):
    notifs.insert_one(notif)
    return {"he": "he"}

@notif_api.route('/add')
def addOne():
    notif = {
        "date": "",
        "time": "",
        "enabled": True,
        "message": "hello",
        "task": "hi",
        "days": [True, True, False, False, False, True, True]
        }
    notifs.insert_one(notif)

@notif_api.route('/remove')
def remove():
    return "hi"

@notif_api.route('/get/<id>')
def getOne(id):
    return notifs

@notif_api.route('/get')
def getAll():
    ns = []
    for n in notifs.find():
        pretty = {
            "id": n['_id'],
            "date": n['date'],
            "time": n['time'],
            "enabled": n['enabled'],
            "message": n['message'],
            "task": n['task'],
            "days": n['days']
        }
        ns.append(pretty)
    print(json.dumps(ns))
    return json.dumps(ns)