import os, pkgutil, settings, logger

#returns a response function for a given keyword keyword, returns None
def findResponse(command):
    response = None
    for response in collect_responses():
        if response.is_match(command):
            return response.respond


def collect_responses():
    responses = []
    logger.getLogger().debug("collecting responses from: " + settings.RESPONSES_PATH)
    for finder, modname, ispkg in pkgutil.walk_packages([settings.RESPONSES_PATH]):
        response = finder.find_module(modname).load_module(modname)
        if hasattr(response, 'KEYWORDS'):
            logger.getLogger().debug("response found: " + modname)
            responses.append(response)
    return responses
