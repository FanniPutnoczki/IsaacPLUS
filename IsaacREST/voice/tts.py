import os, settings

def say(speech):
    if settings.VOICE == 'pico':
        os.system('pico2wave -w temp.wav "' + speech+ '" ')
        os.system('aplay -q temp.wav >/dev/null 2>&1')
    elif settings.VOICE == 'gtts':
        os.system('gtts-cli -o temp.wav "' + speech+ '" ')
        os.system('aplay -q temp.wav >/dev/null 2>&1')

def generate():
    pass
