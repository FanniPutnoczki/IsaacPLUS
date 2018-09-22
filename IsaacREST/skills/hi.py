from flask_restful import Resource, Api

# name(=id) of the skill, it must be unique and one word
NAME='Hi'
FULL_NAME="Hello World"

# optional description of the skill
DESCRIPTION=''

def do():
	#return a text for the mobile client
    return ('Hello')