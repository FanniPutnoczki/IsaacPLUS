CONVERSATION=[
	{
		"prompt": "What is your favourite color?",
		"key": "color",
		"input": "string"
	},
	{
		"prompt": "<answer[0]> is my favourite color too. Do you like dark or light <answer[0]>?",
		"input": "select",
		"key": "lightness",
		"selection": {
			"dark": [
				{
					"prompt": "Dark colors are cool. Do you also like dark red?",
					"input": "select",
					"key": "darkred",
					"selection": {
						"yes": [
							{
								"prompt": "That's great. Tell me your favourite number",
								"key": "favnumber",
								"input": "string"
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
	for con in cons:
		print(con["prompt"])
		if "input" in con:
			answer = input()
			answers[con["key"]] = {
				"text": answer
			}
			if "selection" in con:
				for select in con["selection"]:
					if select in answer:
						answers[con["key"]]["choice"] = select
						childCon = con["selection"][select]
						handle_conversation(childCon, answers)
						break
						


# answ = dict()
# handle_conversation(CONVERSATION, answ)
# print (answ)
	

