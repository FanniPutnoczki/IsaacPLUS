#!/bin/sh

apt-get update

#mongodb
apt-get install python3-pip mongodb 
mkdir -p /data/db

#TTS
pip3 install gTTS
apt-get install mpg321 libttspico-utils

#rest api
pip3 install flask flask-restful pymongo 

#audio
sudo apt-get install portaudio19-dev
pip3 install pyaudio

#sphinx


#sphinx-python
sudo apt-get install swig
sudo apt-get install libpulse-dev
pip3 install --upgrade pocketsphinx
