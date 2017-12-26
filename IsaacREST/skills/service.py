import os, pkgutil, settings, logging
import connection

skills = connection.mongo.isaac.skills

def collectSkills():
    skills = []
    path = os.path.join(os.path.dirname(os.path.realpath(__file__)))
    logger.info("collecting skills from: " + path)
    for finder, modname, ispkg in pkgutil.walk_packages([path]):
        skill = finder.find_module(modname).load_module(modname)
        if (hasattr(skill, 'NAME')
            and hasattr(skill, 'URL')):
                logger.info("skill found: " + getattr(skill, 'NAME'))
                skills.append(skill)
    return skills

#checks if skill is enabled
def isEnabled(name):
    skill = skills.find({'name': name })
    return skill.enabled

#called on start. inserts new skills into database
def insertSkills():
    for skill in collectSkills():
        pass

#disables/enables skill
def enable(name):
    pass
