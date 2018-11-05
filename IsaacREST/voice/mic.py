import wave
import pyaudio
import audioop

CHUNK = 1024
RATE = 16000
FORMAT = pyaudio.paInt16
CHANNELS = 2

#TODO stream from mic instead of file
def record_from_mic(file_path):
    threshold = calibrate_silence_treshold() + 20
    starter_silence = 0
    in_speech_silence = 0
    speech_started = False
    frames = []
    p = pyaudio.PyAudio()
    stream = p.open(format = FORMAT,
                    rate = RATE,
                    channels = CHANNELS,
                    output = True,
                    input = True,
                    frames_per_buffer = CHUNK)
    print(threshold)    
    print ("recording...")
    while True:
        data = stream.read(CHUNK)
        frames.append(data)
        rms = audioop.rms(data, 2)
        if rms <= threshold:
            if speech_started:
                in_speech_silence+=1
            else:
                starter_silence+=1
        else:
            speech_started = True
            in_speech_silence=0
        #abt max 3 sec before speech
        if(starter_silence >= 50):
            break
        #abt max 2 sec between words (increase to 30 if too few)
        if(in_speech_silence >= 25):
            break
    
    print(starter_silence)
    print(in_speech_silence)
    stream.stop_stream()
    stream.close()
    p.terminate()
    print ("recording finished...")
    wave_file = wave.open(file_path, 'wb')
    wave_file.setnchannels(CHANNELS)
    wave_file.setsampwidth(p.get_sample_size(FORMAT))
    wave_file.setframerate(RATE)
    wave_file.writeframes(b''.join(frames))
    wave_file.close()

def check_microphone():
    p = pyaudio.PyAudio()
    for i in range(p.get_device_count()):
        print (p.get_device_info_by_index(i))    

def calibrate_silence_treshold():
    max = 0
    p = pyaudio.PyAudio()
    stream = p.open(format = FORMAT,
                    rate = RATE,
                    channels = CHANNELS,
                    output = True,
                    input = True,
                    frames_per_buffer = CHUNK)
    for i in range(0, int(RATE / CHUNK * 1)):
        data = stream.read(CHUNK)
        rms = audioop.rms(data, 2)
        if (rms > max):
            max = rms
    stream.stop_stream()
    stream.close()
    return max



