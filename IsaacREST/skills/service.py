import os, pkgutil, settings, logging
import connection
from bson.json_util import dumps, loads
from queue import Queue
import voice.conversation as conversation

skills = connection.mongo.isaac.skills

#contains skills with unresolved data and conversations
complex_skill_queue = Queue() 

logger = logging.getLogger()

def collectSkills():
    skills = []
    path = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'scripts')
    for finder, modname, ispkg in pkgutil.walk_packages([path]):
        skill = finder.find_module(modname).load_module(modname)
        if (is_skill(skill)):
                skills.append(skill)
    return skills

def validate_skills():
    path = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'scripts')
    for finder, modname, ispkg in pkgutil.walk_packages([path]):
        skill = finder.find_module(modname).load_module(modname)
        if is_skill(skill):
            logger.info("skill found: " + skill.NAME)

def is_skill(module):
    if all(hasattr(module, attr) for attr in ["NAME", "KEYWORDS", "do"]) or all(hasattr(module, attr) for attr in ["NAME", "PARENT", "ANSWERS"]):
        return True
    return False

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
    else:
        raise ModuleNotFoundError("Skill not found with name: " + name)
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

def is_complex(skill):
    return (hasattr(skill,"CONVERSATION"))

def handle_skill(skill, answers):
    if is_complex(skill) and answers == None:
        complex_skill_queue.put(skill, False)
    else:
        run_skill(skill, answers)

# runs the skill inmediately. Use the handle_skill method because it's safer
def run_skill(skill, answers):
    if isEnabled(skill.NAME):
        if hasattr(skill, "PARENT"):
            parent = get_skill(skill.PARENT)
            parent.do(skill.ANSWERS)
        else:
            if is_complex(skill):
                if answers == None:
                    #TODO test this part
                    convo = skill.CONVERSATION
                    answers = dict()
                    if hasattr(skill, "before_conversation"):
                        data = skill.before_conversation()
                        convo = resolve_conversation_data(data, convo)
                    conversation.handle_conversation(convo, answers)
                skill.do(answers)
            else:
                skill.do()