import os, settings
import logging

logger = logging.getLogger()

def say(speech):
	logger.info("Isaac says: " + speech)
	if settings.VOICE == 'pico':
		os.system('pico2wave -w temp.wav "' + speech+ '" ')
		os.system('aplay -q temp.wav >/dev/null 2>&1')
	elif settings.VOICE == 'gtts':
		os.system('gtts-cli -o temp.wav "' + speech+ '" ')
		os.system('mpg123 temp.wav >/dev/null 2>&1')


