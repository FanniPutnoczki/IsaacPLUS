from pymongo import MongoClient
import settings

mongo = MongoClient(settings.MONGO_HOST, settings.MONGO_PORT)
notifs = mongo.isaac.notifications

while True:
    time.sleep(30)

def startRoutineListener():
	#checks for routines
	#handles conversations
	pass
    