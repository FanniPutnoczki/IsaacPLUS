# import voice.stt as stt
# import voice.tts as tts
from json import dumps, loads
from voice import stt as stt
from voice import tts as tts
#example conversation for testing purposes
CONVERSATION=[
	{
		"prompt": "What is your favourite color?",
		"key": "color",
		"input": "short-string"
	},
	{
		"prompt": "<answer[color]> is my favourite color too. Do you like dark or light <answer[color]>?",
		"input": "select",
		"key": "lightness",
		"selection": {
			"dark": [
				{
					"prompt": "Dark colors are cool. Do you also like dark green?",
					"input": "select",
					"key": "darkred",
					"selection": {
						"yes": [
							{
								"prompt": "That's great. Tell me your favourite number",
								"key": "favnumber",
								"input": "short-string"
							},
							{
								"prompt": "thaks. bye"
							}
						],
						"no": [
							{
								"prompt": "That's a shame."
							}
						]
					}
				}
			],
			"light": [
				{
					"prompt": "That's wonderful"
				}
			],
			#handle other answers
			"": [
				{
					"prompt": "I didn't understand that."
				}
			]
		}
	}
]

def handle_conversation(cons, answers):
	#TODO long and short input should be different
	for con in cons:
		for key in answers:
			#print(key)
			#print(answers[key])
			text_con = dumps(con)
			text_con = text_con.replace("<answer[" + key + "]>", answers[key]["text"])
			con = loads(text_con)
			#print(con)
		#print(con["prompt"])
		tts.say(con["prompt"])
		if "input" in con:
			#answer = input()
			answer = ""
			if con["input"] == "long-string":
				answer = stt.get_speech(long=True)
			else:
				answer = stt.get_speech()
			answers[con["key"]] = {
				"text": answer
			}

			if con["input"] == "select":
				for select in con["selection"]:
					if select.upper() in answer.upper():
						answers[con["key"]]["choice"] = select
						childCon = con["selection"][select]
						handle_conversation(childCon, answers)
						break
						


# answ = dict()
# handle_conversation(CONVERSATION, answ)
# print (answ)
	

