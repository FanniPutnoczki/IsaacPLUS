from flask import Blueprint
import connection
from flask import jsonify

notifs = connection.mongo.isaac.notifications

notif_api = Blueprint('notif_api', __name__)

@notif_api.route('/add', methods=['POST'])
# def add():
#     notifs.insert_one(notif)
#     return {"he": "he"}

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
    id = notifs.insert(notif)
    print('id: ' + str(id))
    return jsonify()

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
        print(n)
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
    print(jsonify(ns))
    return jsonify(ns)