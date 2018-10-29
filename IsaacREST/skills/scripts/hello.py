from flask_restful import Resource, Api

# name(=id) of the skill, it must be unique and one word
NAME='Hello'
FULL_NAME="Hello World"

#Should it appear in the mobile app?
HIDDEN=False

# optional description of the skill
DESCRIPTION=''

KEYWORDS = ['hi', 'hello', 'hey']

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
					"prompt": "Dark colors are cool. Do you also like dark <color>?",
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

def before_conversation():
	return {
	"color": "red"
	}

#optionally returns an answer that isaac says, but only when there was a conversation before.
def do(answers):
    return "finished"