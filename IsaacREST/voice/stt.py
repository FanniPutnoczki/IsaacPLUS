import settings
import wit
from pocketsphinx import LiveSpeech

def wait_for_wake():
    stream = LiveSpeech(lm=False, keyphrase=settings.ASSISTANT_NAME, kws_threshold=1e-20)
    for word in stream:
        break

def get_speech():
	return wit.get_speech()