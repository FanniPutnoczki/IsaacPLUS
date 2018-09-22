from flask import Blueprint, request
import os, pkgutil, settings, logging
from bson.json_util import dumps
import skills.service as service

skills_api = Blueprint('skills_api', __name__)

logger = logging.getLogger()

@skills_api.route('/do/<name>', methods=['GET'])
def do(name):
    for skill in service.collectSkills():
        if ((skill.NAME == name)
            and (service.isEnabled(name))):
            answer = skill.do()
    return dumps(answer)

@skills_api.route('/enable/<name>', methods=['GET'])
def enable(name):
    logger.info('enabling/disabling skill: ' + name)
    service.enable(name)
    return dumps(name)

@skills_api.route('/get', methods=['GET'])
def getAll():
    skills = []
    for skill in service.collectSkills():
        skills.append({
                "name": skill.NAME,
                "url": "http://" + settings.HOST + ":" + str(settings.PORT) + "/api/skills/do/" + skill.NAME,
                "enabled": service.isEnabled(skill.NAME)
            })
    return dumps(skills)



