import settings
from pocketsphinx import LiveSpeech

decoder = ''
PAUSED = False
RUNNING = True

def init():
    config = pocketsphinx.Decoder.default_config()
    config.set_string('-hmm', settings.HMM_PATH)
    config.set_string('-lm', settings.LM_PATH)
    config.set_string('-dict', settings.DICT_PATH)
    config.set_string('-logfn', '/dev/null')
    
    decoder = pocketsphinx.Decoder(config)
        

def waitForWake():
    
    command = ""
    
    p = pyaudio.PyAudio()
    stream = p.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=1024)
    stream.start_stream()
    
    in_speech_bf = False
    decoder.start_utt()
    
    #listening
    while True:
        buf = stream.read(1024)
        if buf:
            decoder.process_raw(buf, False, False)
            if decoder.get_in_speech() != in_speech_bf:
                in_speech_bf = decoder.get_in_speech()
                if not in_speech_bf:
                    decoder.end_utt()
                    answer = decoder.hyp().hypstr
                    #decoder.start_utt()
                    if answer:
                        print ('Result: ' + answer)
                        if settings.ASSISTANT_NAME.upper() in answer.strip().upper().split(''):
                            print ("end")
                            command = answer
                            break
        
    return command


def getSpeech(seconds):
    pass

init()
waitForWake()
