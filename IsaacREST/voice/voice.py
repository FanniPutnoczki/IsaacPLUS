import os

#should I switch to espeak?
def say(speech):
    os.system('pico2wave -w temp.wav "' + speech+ '" ')
    os.system('aplay -q temp.wav >/dev/null 2>&1')

def generate():
    pass