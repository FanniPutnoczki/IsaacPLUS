import stt, settings, voice
import responseManager as rm


def main():
    
    #initializing the pocketsphinx stuff
    stt.init()
    
    command = ''
    
    while True:
        
        command = stt.waitForWake()
        
        #active listening
        while True:
            response = rm.findResponse(command)
            #parsing response
            if response is None:
                voice.say("what do you want?")
                command = stt.getSpeech(5)
                response=rm.findResponse(command)
                if response is None:
                    voice.say('Sorry, I dont understand')
                else:
                    response.execute()
            else:
                response.execute()
                
            
            #listens for 5 secs before going back to passive listening
            command = stt.getSpeech(5)
            if rm.findResponse(command) is None:
                break
    


if __name__ == "__main__":
    main()