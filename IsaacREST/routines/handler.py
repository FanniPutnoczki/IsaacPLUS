#simple routines will run inmediately, complex routines will be added to the queue and handled when the brain is not busy.

from pymongo import MongoClient
import settings
import routines.service as service
import datetime
from queue import Queue 
from threading import Thread
import time
import logging

logger = logging.getLogger()
queue = Queue()

def __listen__(queue):
	while True:
		logger.info("getting routines")
		now = datetime.datetime.now()
		routines = service.get_all()
		for routine in routines:
			if routine["enabled"]:
				if routine["recurring"]:
					if routine["days"][now.weekday()]:
						queue.put(routine, False)
				else:
					now = datetime.datetime.now()
					if  routine["date"]["day"] == now.day and \
						routine["date"]["month"] == now.month and \
						routine["date"]["year"] == now.year and \
						routine["time"]["hour"] == now.day and \
						routine["time"]["minute"] == now.day:
						queue.put(routine, False)
						service.delete(routine["_id"]["$oid"])
		time.sleep(60)

def start_routine_listener():
	#checks for routines
	#handles conversations
	logger.info("starting routine listener")
	thread = Thread(target=__listen__, args=(queue,))
	thread.start()

def handle_routine():
	pass