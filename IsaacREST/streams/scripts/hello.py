import logging
from random import randint

#refresh rate in secs
REFRESH_RATE=10
NAME="Arduino Weather Station"
ID="hellostream"

# type of display on the mobile app. values: text or progress, in case of progress bar, a min and max value is needed too
VIEW=[
	{
		"type": "text",
		"name": "temperature"
	},
	{
		"type": "progress",
		"name": "humidity",
		"min": 1,
		"max": 100
	}
]
#return a dictionary that contains a value and a display value

logger = logging.getLogger()

def initStream():
	pass

def getValue():
	#do some data reading and calculations here
	return [
	{'value': randint(0, 9), 'display': str(randint(0, 9)) + " C"},
	{'value': 85, 'display': "85%"}
	]