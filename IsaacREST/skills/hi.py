from flask_restful import Resource, Api

# name(=id) of the skill, it must be unique and one word
NAME='Hi'
FULL_NAME="Hello World"

# should it appear in the mobile app or is it a voice based skill?
VOICE_ONLY=True

# optional description of the skill
DESCRIPTION=''

def do():
	#return a text for the mobile client
    pass