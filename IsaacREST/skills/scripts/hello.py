from flask_restful import Resource, Api

# name(=id) of the skill, it must be unique and one word
NAME='Hello'
FULL_NAME="Play music"

#Should it appear in the mobile app?
HIDDEN=False

# optional description of the skill
DESCRIPTION=''

KEYWORDS = ['hi', 'hello', 'hey']

CONVERSATION=[
	{
		"prompt": "What is your favourite color?",
		"key": "favColor",
		"input": "short-string"
	},
	{
		"prompt": "<answer[favColor]> is my favourite color too. Do you like dark or light <answer[favColor]>?",
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

def before_conversation():
	return {
	"color": "green"
	}

def do(answers):
    return
