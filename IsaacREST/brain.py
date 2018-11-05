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

kw = stt.KeywordListener()

skills.insertSkills()
streams.startStreams()
stt.generate_keyword_list()
routines.start_routine_listener()
kw.start_passive_listen()

while True:
	if kw.keyword_said():
		print("keyword said")
		kw.stop_passive_listen()
		while True:
			command = stt.get_command(8)
			firstRound = True
			try:
				skill = skills.find_match(command)
				skills.handle_skill(skill, None)
				firstRound = False
			except ModuleNotFoundError:
				logger.info("no skill found for: " + command)
				if not firstRound:
					tts.say("I'm sorry. I don't understand.")
			if (command == ""):
				kw.start_passive_listen()
				break

	else:
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
		#todo resolve routine conversations and execute them if they are in the queue

	time.sleep(1)