import logging
import serial
import time 

#refresh rate in secs
REFRESH_RATE=2
NAME="Arduino Sensor Measurements"
ID="temperature"

# type of display on the mobile app. values: text or progress, in case of progress bar, a min and max value is needed too
VIEW=[
	{
		"type": "text",
		"name": "Temperature"
	}
]

logger = logging.getLogger()
ser = serial.Serial('/dev/ttyACM0', 9600)

def initStream():
	pass


def getValue():
	data=""
	try:	
		data = (str.strip((ser.readline().decode("utf-8"))))
	except:
		pass	
	return [
	{'value': data, 'display': data + " C"}
	]
