import settings
import os
import skills.service as service
import time
from pocketsphinx import LiveSpeech
import multiprocessing
from ctypes import c_char_p
import os

MAIN_PATH = os.path.dirname(os.path.realpath(__file__))


def wait_for_wake():
    p = multiprocessing.Process(target=wait_for_wake_process)
    p.start()
    p.join()
    p.terminate()

def wait_for_wake_process():
    stream = LiveSpeech(lm=False, verbose=False, keyphrase="isaac", kws_threshold=1e-20)
    for word in stream:
        return

#TODO different length different threshold https://cmusphinx.github.io/wiki/tutoriallm/
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

#TODO replace path
def get_speech_process(string):
    for phrase in LiveSpeech(lm=False, verbose=False, kws="/home/fox/Git/IsaacPLUS/IsaacREST/keys.list"):
        string.value = str(phrase)
        return

def get_command():
    manager = multiprocessing.Manager()
    string = manager.Value(c_char_p, "")
    p = multiprocessing.Process(target=get_speech_process, args=(string,))
    p.start()
    p.join(10)
    p.terminate()
    print("you said: " + string.value)
    return string.value

#wait_for_wake()
#get_command()
