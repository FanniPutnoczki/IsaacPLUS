# name(=id) of the skill, it must be unique and one word
NAME='Temperature'
FULL_NAME="Temperature"

#Should it appear in the mobile app?
HIDDEN=False

# optional description of the skill
DESCRIPTION=''

KEYWORDS = ['temperature']

CONVERSATION=[
	{
		"prompt": "The temperature is <weather> degrees"
	}
]

def before_conversation():
	return {
	"weather": "23"
	}

def do(answers):
    return
