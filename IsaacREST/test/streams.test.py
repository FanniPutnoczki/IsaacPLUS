import streams.service as service
from os import listdir
from os.path import isfile, join

streams_path = '../streams/scripts'
stream_files = [f for f in listdir(streams_path) if isfile(join(streams_path, f))]

service.insertStreams()
streams = service.collectStreams()

if(len(streams) != len(stream_files)):
	print("error while inserting streams to db")