import os
import random

# name(=id) of the skill, it must be unique and one word
NAME='Joke'
FULL_NAME="Joke"

#Should it appear in the mobile app?
HIDDEN=False

# optional description of the skill
DESCRIPTION=''

KEYWORDS = ['joke', 'funny']

CONVERSATION=[
	{
		"prompt": "<joke>"
	}
]

def before_conversation():
   f = open(os.path.join(os.path.dirname(os.path.realpath(__file__)), 'jokes.txt'), "r")
   jokes = []
   for x in f:
      jokes.append(x)
   joke = str(random.choice(jokes)).rstrip("\n")
   print(joke)
   return {
   "joke": joke
   }

def do(answers):
    return
