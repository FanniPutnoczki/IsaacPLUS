import logging
from random import randint

#refresh rate in secs
REFRESH_RATE=10
NAME="Fish Tank Datastream"
ID="teststream"

# type of display on the mobile app. values: text or progress, in case of progress bar, a min and max value is needed too
VIEW=[
	{
		"type": "text",
		"name": "Nitrite Level"
	},
	{
		"type": "progress",
		"name": "Water Hardness",
		"min": 0,
		"max": 450
	},
	{
		"type": "progress",
		"name": "pH",
		"min": 1,
		"max": 14
	}
]
#return a dictionary that contains a value and a display value

logger = logging.getLogger()

def initStream():
	pass

def getValue():
	#do some data reading and calculations here
	return [
	{'value': 0.2, 'display': "0.2 ppm"},
	{'value': 115, 'display': "115 ppm"},
	{'value': 7, 'display': "7"}
	]