import os, pkgutil, settings, logging
import connection
from bson.json_util import dumps

skills = connection.mongo.isaac.skills

logger = logging.getLogger()

def collectSkills():
    skills = []
    path = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'scripts')
    logger.info("collecting skills from: " + path)
    for finder, modname, ispkg in pkgutil.walk_packages([path]):
        skill = finder.find_module(modname).load_module(modname)
        if (hasattr(skill, 'NAME')):
                logger.info("skill found: " + getattr(skill, 'NAME'))
                skills.append(skill)
    return skills

#checks if skill is enabled
def isEnabled(name):
    skill = skills.find_one({'name': name })
    logger.info('skill: ' + dumps(skill))
    return skill['enabled']

#called on start. inserts new skills into database
def insertSkills():
    for skill in collectSkills():
        if not bool(skills.find_one({'name': skill.NAME })):
            logger.info('registering new skill: ' + skill.NAME)
            skills.insert({
                'name': skill.NAME,
                'enabled': True
                })


#disables/enables skill
def enable(name):
    skill = skills.find_one({'name': name })
    #if the skill exists
    if bool(skill):
        skills.update_one({
            'name': name
            }, {
            '$set': {
                'enabled': True
                }
            })

#disables/enables skill
def disable(name):
    skill = skills.find_one({'name': name })
    #if the skill exists
    if bool(skill):
        skills.update_one({
            'name': name
            }, {
            '$set': {
                'enabled': False
                }
            })
