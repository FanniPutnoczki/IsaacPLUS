import streams.service as stream

# name(=id) of the skill, it must be unique and one word
NAME='Temperature'
FULL_NAME="Temperature"

#Should it appear in the mobile app?
HIDDEN=False

# optional description of the skill
DESCRIPTION=''

KEYWORDS = ['temperature', 'weather']

CONVERSATION=[
	{
		"prompt": "The temperature is <weather> degrees"
	}
]

def before_conversation():
	data = stream.get_stream_data("temperature")
	return {
	"weather": str(data[0]["value"])
	}

def do(answers):
    return
