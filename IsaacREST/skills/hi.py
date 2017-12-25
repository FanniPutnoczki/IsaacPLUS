from flask_restful import Resource, Api

# name(id) of the skill, it must be unique and one word
NAME='Hello'
ENABLED=True
URL='/hi'
# optional description of the skill
DESCRIPTION=''

class Hi(Resource):
    def get(self):
        print ('hi')
        return {"hi":'hi'}