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
		pass
		#todo resolve routine conversations and execute them if they are in the queue
		#print("checking for notifs")

	time.sleep(1)



def do_conversation(skill):
	convo = ""
	if hasattr(skill, "before_conversation"):
		data = skill.before_conversation() 
		convo = skills.resolve_conversation_data(data, skill.CONVERSATION)
	else:
		convo = skill.CONVERSATION
	answers = dict()
	conversation.handle_conversation(convo, answers)
	return answers