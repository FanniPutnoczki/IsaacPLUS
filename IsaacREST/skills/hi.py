from flask_restful import Resource, Api

# name(id) of the skill, it must be unique and one word
NAME='Hello'
URL='/hi'
# optional description of the skill
DESCRIPTION=''

def do():
    print 'Hello'