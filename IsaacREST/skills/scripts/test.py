from flask_restful import Resource, Api

# name(=id) of the skill, it must be unique and one word
NAME='Test'
FULL_NAME="Test Hello World"

#Should it appear in the mobile app?
HIDDEN=False

# should it appear in the mobile app or is it a voice based skill?
VOICE_ONLY=True

# optional description of the skill
DESCRIPTION=''

KEYWORDS = ['test']

CONVERSATION=[]

#this is not a conversation skill so isaac won't say anything at the end of the skill
def do():
    pass