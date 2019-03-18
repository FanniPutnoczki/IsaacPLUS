import settings
import os
from skills import service as service
import time
import logging
import voice.bing as bing
import voice.mic as mic
from threading import Thread
from pocketsphinx.pocketsphinx import *
from sphinxbase.sphinxbase import *
import pyaudio
      
MAIN_PATH = os.path.dirname(os.path.realpath(__file__))
logger = logging.getLogger()

class CommandListener():

    def __init__(self):
        modeldir = os.path.join(os.path.dirname(__file__),"resources")
        config = Decoder.default_config()
        config.set_string('-hmm', os.path.join(modeldir, 'en-us'))
        config.set_string('-logfn', '/dev/null')
        config.set_string('-dict', os.path.join(modeldir, 'en-us/cmudict-en-us.dict'))
        config.set_string('-kws', (os.path.join(settings.ISAAC_PATH, "keys.list")))
        self.decoder = Decoder(config)

    # timeout is in seconds
    def get_command(self, timeout):
        start_time = time.time()
        answer = ""
        p = pyaudio.PyAudio()
        stream = p.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=1024)
        stream.start_stream()
        self.decoder.start_utt()
        while True:
            if(time.time() - start_time >= timeout):
                self.decoder.end_utt()
                stream.stop_stream()
                stream.close()
                break
            buf = stream.read(1024)
            if buf:
                 self.decoder.process_raw(buf, False, False)
            else:
                 break
            if self.decoder.hyp() != None:
                answer = self.decoder.hyp().hypstr
                self.decoder.end_utt()
                stream.stop_stream()
                stream.close()
                break
        return answer

class KeywordListener:    

    def __init__(self):
        modeldir = os.path.join(os.path.dirname(__file__),"resources")
        config = Decoder.default_config()
        config.set_string('-hmm', os.path.join(modeldir, 'en-us'))
        config.set_string('-logfn', '/dev/null')
        config.set_string('-dict', os.path.join(modeldir, 'en-us/cmudict-en-us.dict'))
        config.set_string('-keyphrase', settings.ASSISTANT_NAME)
        self.decoder = Decoder(config)
        self.dictionary = dict()

    def __wake_process__(self, dictionary):
        p = pyaudio.PyAudio()
        stream = p.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=1024)
        stream.start_stream()
        self.decoder.start_utt()
        while dictionary["running"]:
            buf = stream.read(1024)
            if buf:
                 self.decoder.process_raw(buf, False, False)
            else:
                 break
            if self.decoder.hyp() != None:
                print (self.decoder.hyp().hypstr)
                answer = self.decoder.hyp().hypstr
                dictionary["running"] = False
        self.decoder.end_utt()
        stream.stop_stream()
        stream.close()
        p.terminate()

    def start_passive_listen(self):
        self.dictionary["running"] = True
        thread = Thread(target=self.__wake_process__, args=(self.dictionary,))
        thread.daemon = True
        thread.start()
        logger.info("Passive listening - waiting for keyword")

    def keyword_said(self):
        return not self.dictionary["running"]

    def stop_passive_listen(self):
        logger.info("Stopping Passive listening")
        self.dictionary["running"] = False



# TODO different length different threshold https://cmusphinx.github.io/wiki/tutoriallm/
def generate_keyword_list():
    logger.info("Generating keyword list")
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

# TODO replace path
def __get_speech_process(dictionary):
    dictionary["ls"] = LiveSpeech(lm=False, verbose=False, kws="/home/fox/Git/IsaacPLUS/IsaacREST/keys.list")
    for phrase in dictionary["ls"]:
        dictionary["speech"] = str(phrase)
        return

def timeout(dict):
    print ("hello, world")
    dict["ls"].stop()

def get_command(timeout):
    logger.info("Listening for command")
    manager = multiprocessing.Manager()
    string = manager.Value(c_char_p, "")
    p = multiprocessing.Process(target=__get_speech_process, args=(string,))
    p.start()
    p.join(timeout)
    p.terminate()
    logger.info("you said: " + string.value)
    return string.value

def get_speech(long=False):
    mic.record_from_mic("temp.wav")
    speech = bing.recognize_speech("temp.wav", long)
    logger.info(speech)
    return speech
