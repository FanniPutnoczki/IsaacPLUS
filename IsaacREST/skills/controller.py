from flask import Blueprint, request
import os, pkgutil, settings, logging
from bson.json_util import dumps
import skills.service as service

skills_api = Blueprint('skills_api', __name__)

logger = logging.getLogger()

@skills_api.route('/skills/<name>', methods=['GET'])
def do(name):
    for skill in service.collectSkills():
        if ((skill.NAME == name)
            and (service.isEnabled(name))):
            skill.do()

@skills_api.route('/enable', methods=['POST'])
def enable():
    id = request.json['name']
    logger.info('enabling/disabling skill: ' + id)
    service.enable(id)

@skills_api.route('/get', methods=['GET'])
def getAll():
    skills = []
    for skill in service.collectSkills():
        skills.append({
                "name": skill.NAME,
                "url": "http://" + settings.HOST + ":" + str(settings.PORT) + "/skills" + skill.URL,
                "enabled": service.isEnabled(skill.NAME)
            })
    return dumps(skills)



