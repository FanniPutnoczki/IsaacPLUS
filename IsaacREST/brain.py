import voice.stt as stt
import logging

logger = logging.getLogger()

skills.service.insertSkills()
streams.service.startStreams()
#todo routine handler start up

while True:
	#todo resolve routine conversations and execute them if they are in the queue
	logger.info("Passive listening - waiting for keyword")
	stt.wait_for_wake()
	logger.info("Active listening - waiting for command")
	command = stt.get_speech()