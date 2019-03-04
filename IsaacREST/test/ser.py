import serial
import time 

ser = serial.Serial('/dev/ttyACM0', 9600)
while True:
    try: 
        data = (str.strip((ser.readline().decode("utf-8"))))
        print(data)
        time.sleep(2)
