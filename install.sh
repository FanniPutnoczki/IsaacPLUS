#!/bin/sh

apt-get update

pip3 install pyserial

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


#sphinx-python
sudo apt-get install swig libpulse-dev
pip3 install --upgrade pocketsphinx

#sphinx
sudo apt-get install autoconf gcc automake libtool bison python-dev
unzip sphinx.zip

cd sphinx/sphinxbase/
chmod 777 autogen.sh
#should autogen run twice?
./autogen.sh
./autogen.sh
./configure
make
sudo make install
export LD_LIBRARY_PATH=/usr/local/lib
export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig
sudo sh -c 'echo "/usr/local/lib" >> /etc/ld.so.conf'
sudo ldconfig
cd ..

cd pocketsphinx/
chmod 777 ./autogen.sh
#should it be ran twice?
sudo ./autogen.sh
sudo ./autogen.sh
sudo make
sudo make install
sudo ldconfig
cd ..
cd ..
sudo rm -rf sphinx
