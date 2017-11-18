from flask_restful import Resource, Api

NAME='Hello World'
ENABLED=True
URL='/hi'

class Hi(Resource):
    def get(self):
        print ('hi')
        return {"hi":'hi'}