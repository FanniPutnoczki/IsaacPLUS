from flask import Blueprint, request
import connection, logging
from bson.json_util import loads, dumps

import notification.service as service

logger = logging.getLogger(__name__)

notif_api = Blueprint('notif_api', __name__)

@notif_api.route('/add', methods=['POST'])
def add():
    routine = request.get_json()
    logger.warning('inserting ' + dumps(routine))
    service.add(routine)
    logger.warning('inserted routine') 
    return dumps({})

@notif_api.route('/delete/<id>', methods=['GET'])
def remove(id):
    service.delete(id)
    return dumps({})

@notif_api.route('/<id>', methods=['GET'])
def get(id):
    return dumps(service.get(id))

@notif_api.route('/', methods=['GET'])
def get_all():
    # ns = []
    # for n in notifs.find():
    #     try:
    #         pretty = {
    #             "id": n['_id'],
    #             "date": n['date'],
    #             "time": n['time'],
    #             "enabled": n['enabled'],
    #             "message": n['message'],
    #             "task": n['task'],
    #             "days": n['days']
    #         }
    #         ns.append(pretty)
    #     except:
    #         pass
    return dumps(service.get_all())