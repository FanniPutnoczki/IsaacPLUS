import logging
import os

MONGO_HOST='localhost'
MONGO_PORT=27017

HOST = '0.0.0.0'
PORT = 5000

USERNAME = "changeit"
PASSWORD = "changeit"

#values: gtts or pico, try out both and choose which voice do you prefer.
VOICE="pico"

ASSISTANT_NAME="isaac"

#key from azure cognitive services
MICROSOFT_KEY = ""

ISAAC_PATH=os.path.dirname(os.path.realpath(__file__))

logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
