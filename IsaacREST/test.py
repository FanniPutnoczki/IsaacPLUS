import voice.stt as stt
import voice.tts as tts
import time
# print("sdfsd")
# tts.say("say something");
#stt.get_speech()
# stt.get_command(40)
# stt.get_speech()
# stt.get_speech()
# print("sdfsd")
# tts.say("say something again");
# stt.get_command(40)
# stt.get()

kw = stt.KeywordListener()
kw.start_passive_listen()
while True:
	if kw.keyword_said():
		kw.stop_passive_listen()
		break
# kw.stop_passive_listen()
# stt.get_speech()
#stt.get_keyword()