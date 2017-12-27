from flask import Blueprint, request
import connection, logging
from bson.json_util import loads, dumps
from bson.objectid import ObjectId

logger = logging.getLogger(__name__)

notifs = connection.mongo.isaac.notifications

notif_api = Blueprint('notif_api', __name__)

@notif_api.route('/add', methods=['POST'])
def add():
    notif = {
        "date": request.json['date'],
        "time": request.json['time'],
        "enabled": request.json['enabled'],
        "message": request.json['message'],
        "task": request.json['task'],
        "days": request.json['days']
        }
    logger.warning('inserting ' + dumps(notif))
    id = notifs.insert(notif)
    logger.warning('inserted notif') 
    return dumps({})

@notif_api.route('/remove/<id>', methods=['GET'])
def remove(id):
    notifs.delete_one({'_id': ObjectId(id)})
    return dumps({})


@notif_api.route('/get', methods=['GET'])
def getAll():
    ns = []
    for n in notifs.find():
        try:
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
        except:
            pass
    return dumps(ns)