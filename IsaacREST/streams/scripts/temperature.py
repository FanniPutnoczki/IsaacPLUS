import logging
import serial
import time 
import requests 

#refresh rate in secs
REFRESH_RATE=3600
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
#ser = serial.Serial('/dev/ttyACM0', 9600)

def initStream():
	pass

URL = "http://api.openweathermap.org/data/2.5/weather"

PARAMS = {
	"q": "Miskolc",
	"APPID":"47ca94dfbd46fd3f8d28f12027d8d9d3"
}

def getValue():

	r = requests.get(url = URL, params=PARAMS) 
  
	# extracting data in json format 
	data = r.json() 
	temp = round(data["main"]["temp"]-273)
	#try:	
		#for arduino code
		#data = (str.strip((ser.readline().decode("utf-8"))))
	#except:
	#	pass	
	return [
	{'value': temp, 'display': str(temp) + " C"}
	]
