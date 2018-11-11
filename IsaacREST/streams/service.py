import os, pkgutil, settings, logging
from json import dumps
import threading
import time

logger = logging.getLogger()

streamsDict = dict()

def getStreams():
	streams = []
	path = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'scripts')
	logger.info("collecting stream scripts from: " + path)
	for finder, modname, ispkg in pkgutil.walk_packages([path]):
		stream = finder.find_module(modname).load_module(modname)
		if (hasattr(stream, 'NAME')):
			logger.info("stream found: " + getattr(stream, 'NAME'))
			streams.append(stream)
	return streams

def get_stream_data(id):
	return streamsDict[id]

def startStreams():
	#streamsDict = dict()
	logger.info("starting streams")
	streams = getStreams()
	for stream in streams:
		stream.initStream()
		logger.info("starting thread: " + stream.NAME)
		t=threading.Thread(target=worker, args=(stream, streamsDict,))
		t.daemon = True
		t.start()
	logger.info("starting streams finished")


def worker(stream, streams):
	while True:
		streams[stream.ID] = stream.getValue()
		logger.info("refreshed stream value: " + stream.NAME)
		#logger.info(streams[stream.ID])
		time.sleep(stream.REFRESH_RATE)