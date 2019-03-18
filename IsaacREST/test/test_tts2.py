import voice.stt as stt
import voice.tts as tts
import time

kw = stt.KeywordListener()
kw.start_passive_listen()
while True:
	if kw.keyword_said():
		kw.stop_passive_listen()
		print("sphinx setup is successful")
		break