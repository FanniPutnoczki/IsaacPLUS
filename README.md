# I.S.A.A.C.
## Intelligent Speaking Assistant And Computer
Isaac is an IoT smart home platform that helps you to automatize and control your house (or anything else you want) in an easy, voice-driven way. 

The main inspiration for this project was JARVIS from Iron Man, though it hasn't reached that level yet. The project is still in progress but it will be released soon.

## Core Features ##
* Easy to add new skills
* Designed for Raspberry PI
* Schedule routines and reminders to automatize your home
* Features an Android app for remote control
* Read data from anywhere and display it on the mobile dashboard
* Automatically generated REST API for easier integration
* Voice controlled
* And more

## Control it with your phone ##
![image](https://github.com/FanniPutnoczki/IsaacPLUS/blob/master/image.jpg?raw=true)

## Getting Started

Installing Isaac is a really simple process. All you need is a Linux compatible computer, a microphone and a speaker. You can also control Isaac with your smartphone, but the app is only available for Android now.

Just simply clone this repository and cd into the created folder.
  
`git clone https://github.com/FanniPutnoczki/IsaacPLUS.git`  

Then open up a terminal in the *IsaacPLUS* folder and type the following:  

`sudo install.sh`

This command will take care of almost everything, however, to make the voice recognition service work, you need to create a free **Azure account** and get an API key from them. 

If you need help setting up your account, check out our Wiki page for a detailed installation guide.

## How to use it

You can start Isaac by running the main.py file:

`python3 main.py`

After that Isaac starts to listen to your commands. Say "*Isaac*" and wait for a beeping sound, that means that he is listening to your commands.
