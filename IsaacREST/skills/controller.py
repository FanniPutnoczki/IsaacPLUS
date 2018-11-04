from flask import Blueprint, request
import os, pkgutil, settings, logging
from bson.json_util import dumps
import skills.service as service
from flask import abort, request

skills_api = Blueprint('skills_api', __name__)

logger = logging.getLogger()

@skills_api.route('/resolve/<name>', methods=['GET'])
def resolve(name):
    logger.info('resolving ' + name)
    skill = service.get_skill(name)
    if hasattr(skill, "PARENT"):
        abort(400, 'child skills do not require answers because they already have one')
    if (service.isEnabled(name)):
        data = skill.before_conversation()
        new_convo = service.resolve_conversation_data(data,skill.CONVERSATION)
        return dumps(new_convo)
    else:
        abort(405, 'skill is not enabled') 

@skills_api.route('/do/<name>', methods=['POST'])
def do(name):
    logger.info('executing ' + name)
    answer = ""
    try:
        skill = service.get_skill(name)
    except Exception as e:
        abort(404, 'skill not found')
    if (service.isEnabled(name)):
        answers = None
        if hasattr(skill.CONVERSATION):
            answers = request.get_json()
        service.handle_skill(skill, answers)
        # if hasattr(skill, "PARENT"):
        #     parent = service.get_skill(skill.PARENT)
        #     answer = parent.do(skill.ANSWERS)
        # else:
        #     if not len(skill.CONVERSATION) == 0:
        #         answers = request.get_json()
        #         answer = skill.do(answers)
        #     else:
        #         answer = skill.do()
        # return dumps({})
    else:
        abort(405, 'skill is not enabled')

@skills_api.route('/enable/<name>', methods=['GET'])
def enable(name):
    logger.info('enabling skill: ' + name)
    service.enable(name)
    return dumps(name)

@skills_api.route('/disable/<name>', methods=['GET'])
def disable(name):
    logger.info('disabling skill: ' + name)
    service.disable(name)
    return dumps(name)

@skills_api.route('/get', methods=['GET'])
def getAll():
    skills = []
    for skill in service.collectSkills():
        convo = []
        if hasattr(skill, "CONVERSATION"):
            convo = skill.CONVERSATION
            pass
        skills.append({
                "name": skill.NAME,
                "url": "/skills/do/" + skill.NAME,
                "enabled": service.isEnabled(skill.NAME),
                "conversation": convo
            })
    return dumps(skills)



