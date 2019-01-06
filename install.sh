#!/bin/sh

apt-get update

#mongodb
apt-get install python3-pip mongodb 

#TTS
pip3 install gTTS
apt-get install mpg321 libttspico-utils

#rest api
pip3 install flask flask-restful pymongo 

#error why?
pyaudio
