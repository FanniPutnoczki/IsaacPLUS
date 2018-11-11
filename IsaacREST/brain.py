import voice.stt as stt
import voice.tts as tts
import logging
import skills.service as skills
import streams.service as streams
import notification.handler as routines
import time
import voice.conversation as conversation

logger = logging.getLogger()
logger.info("starting brain")

stt.generate_keyword_list()
skills.insertSkills()
streams.startStreams()
routines.start_routine_listener()

kw = stt.KeywordListener()
cl = stt.CommandListener()

kw.start_passive_listen()

while True:
	if kw.keyword_said():
		kw.stop_passive_listen()
		while True:
			command = cl.get_command(4)
			firstRound = True
			try:
				skill = skills.find_match(command)
				logger.info("match found, handling skill: " + skill.NAME)
				skills.run_skill(skill, None)
				firstRound = False
			except ModuleNotFoundError:
				logger.info("no skill found for: " + command)
				if not firstRound:
					tts.say("I'm sorry. I don't understand.")
			if (command == ""):
				kw.start_passive_listen()
				break
	
	else:
		stopped = False
		if((not routines.queue.empty()) or (not skills.complex_skill_queue.empty())):
			stopped = True
			kw.stop_passive_listen()
		while not routines.queue.empty():
			routine = routines.queue.get()
			logger.info("executing routine: " + routine.name)
			tts.say(routine["message"])
			for skill_name in routine["skills"]:
				skill = skills.get_skill(skill_name)
				skills.run_skill(skill)
		while not skills.complex_skill_queue.empty():
			skill = skills.complex_skill_queue.get()
			logger.info("executing skill from complex_skill_queue: " + skill.NAME)
			skills.run_skill(skill)
		if(stopped):
			kw.start_passive_listen()
		#todo resolve routine conversations and execute them if they are in the queue
	time.sleep(1)
