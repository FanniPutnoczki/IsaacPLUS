#simple routines will run inmediately, complex routines will be added to the queue and handled when the brain is not busy.

from pymongo import MongoClient
import settings

mongo = MongoClient(settings.MONGO_HOST, settings.MONGO_PORT)
notifs = mongo.isaac.notifications

while True:
    time.sleep(30)

def start_routine_listener():
	#checks for routines
	#handles conversations
	pass
    
def handle_routine():
	pass