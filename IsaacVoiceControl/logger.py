import logging
import settings      
        
log = logging.getLogger(settings.APP_NAME)
log.setLevel(settings.LOG_LEVEL)
ch = logging.StreamHandler()
ch.setLevel(settings.LOG_LEVEL)
fmt = logging.Formatter(settings.LOG_FORMAT)
ch.setFormatter(fmt)
log.addHandler(ch)
    
def getLogger():
    return log