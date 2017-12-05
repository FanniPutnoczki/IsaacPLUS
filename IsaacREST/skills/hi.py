from flask_restful import Resource, Api

# name(id) of the skill, it must be unique and one word
NAME='Hello'
# optional description of the skill
DESCRIPTION=''
ENABLED=True
URL='/hi'

class Hi(Resource):
    def get(self):
        print ('hi')
        return {"hi":'hi'}