import voice.stt as stt
import voice.tts as tts
import logging
import skills
import streams.service as streams

logger = logging.getLogger()

skills.service.insertSkills()
streams.startStreams()
stt.generate_keyword_list()
#todo routine handler start up

while True:
	#todo resolve routine conversations and execute them if they are in the queue
	logger.info("Passive listening - waiting for keyword")
	stt.wait_for_wake()
	logger.info("Active listening - waiting for command")
	command = stt.get_command()
