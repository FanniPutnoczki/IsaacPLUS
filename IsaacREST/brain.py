import voice.stt as stt
import voice.tts as tts
import logging
import skills.service as skills
import streams.service as streams
import notification.handler as routines
import time
import voice.conversation as conversation
import threading


logger = logging.getLogger()
stt.generate_keyword_list()

def brain(routine_queue, complex_skill_queue):
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
				except ModuleNotFoundError:
					logger.info("no skill found for: " + command)
				if (command == ""):
					kw.start_passive_listen()
					break
		
		else:
			stopped = False
			if((not routine_queue.empty()) or (not complex_skill_queue.empty())):
				stopped = True
				kw.stop_passive_listen()
			while not routine_queue.empty():
				routine = routines.queue.get()
				logger.info("executing routine: " + routine.name)
				tts.say(routine["message"])
				for skill_name in routine["skills"]:
					skill = skills.get_skill(skill_name)
					skills.run_skill(skill, None)
			while not complex_skill_queue.empty():
				skill = complex_skill_queue.get()
				logger.info("executing skill from complex_skill_queue: " + skill.NAME)
				skills.run_skill(skill, None)
			if(stopped):
				kw.start_passive_listen()
		time.sleep(1)


# brain_thread = threading.Thread(target = brain, args=(routines.queue, skills.complex_skill_queue,))
# brain_thread.start()
# brain(routines.queue, skills.complex_skill_queue)