import os, pkgutil, settings, logging
import connection
from bson.json_util import dumps, loads

skills = connection.mongo.isaac.skills

logger = logging.getLogger()

def collectSkills():
    skills = []
    path = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'scripts')
    for finder, modname, ispkg in pkgutil.walk_packages([path]):
        skill = finder.find_module(modname).load_module(modname)
        if (hasattr(skill, 'NAME')):
                logger.debug("skill found: " + getattr(skill, 'NAME'))
                skills.append(skill)
    return skills

def get_skill(name):
    all = collectSkills()
    for skill in all:
        if skill.NAME == name:
            return skill
    raise ModuleNotFoundError("Skill not found with name: " + name)


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

def resolve_conversation_data(data, convo):
    text = dumps(convo)

    for key in data:
        text = text.replace("<"+ key +">", data.get(key, "undefined"))

    logger.info(text)
    return loads(text)

def find_match(command):
    for skill in collectSkills():
        if hasattr(skill, "KEYWORDS"):
            for kw in skill.KEYWORDS:
                if kw in command:
                    return skill
    raise ModuleNotFoundError("Cannot find skill for command: " + command)

def handle_skill(skill, answers):
    if isEnabled(skill.NAME):
        if hasattr(skill, "PARENT"):
            parent = get_skill(skill.PARENT)
            parent.do(skill.ANSWERS)
        else:
            if hasattr(skill, "CONVERSATION"):
                if answers == None:
                    #push into a list because the conversation needs to be resolved first
                    pass
                else:
                    skill.do(answers)
            else:
                skill.do()