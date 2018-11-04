import settings
import os
import skills.service as service
import time
from pocketsphinx import LiveSpeech
import multiprocessing
from ctypes import c_char_p
import os
import logging


MAIN_PATH = os.path.dirname(os.path.realpath(__file__))
logger = logging.getLogger()

class KeywordListener:    

    def __init__(self):
        self.process = multiprocessing.Process(target=self.__wake_process__)
    
    def __wake_process__(self):
        stream = LiveSpeech(lm=False, verbose=False, keyphrase=settings.ASSISTANT_NAME, kws_threshold=1e-20)
        for word in stream:
            logger.info(word)
            break
        exit()

    def start_passive_listen(self):
        self.process = multiprocessing.Process(target=self.__wake_process__)
        logger.info("Passive listening - waiting for keyword")
        self.process.start()

    def keyword_said(self):
        return not self.process.is_alive()

    def stop_passive_listen(self):
        logger.info("Stopping Passive listening")
        self.process.terminate()



# #TODO different length different threshold https://cmusphinx.github.io/wiki/tutoriallm/
def generate_keyword_list():
    try:
        os.remove("keys.list")
    except OSError:
        pass
    f = open("keys.list","w+")
    for skill in service.collectSkills():
        if hasattr(skill, "KEYWORDS"):
            for kw in skill.KEYWORDS:
                f.write(kw + r' /1e-1/')
                f.write("\n")
    f.close()

# #TODO replace path
def get_speech_process(string):
    for phrase in LiveSpeech(lm=False, verbose=False, kws="/home/fox/Git/IsaacPLUS/IsaacREST/keys.list"):
        string.value = str(phrase)
        return

def get_command(timeout):
    logger.info("Listening for command")
    manager = multiprocessing.Manager()
    string = manager.Value(c_char_p, "")
    p = multiprocessing.Process(target=get_speech_process, args=(string,))
    p.start()
    p.join(timeout)
    p.terminate()
    logger.info("you said: " + string.value)
    return string.value


# p = multiprocessing.Process(target=wait_for_wake_process)

#wait_for_wake()
#get_command()
