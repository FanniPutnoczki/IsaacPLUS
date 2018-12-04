import json
import requests
import settings
import logging

REGION = 'westeurope' # westus, eastasia, northeurope 
MODE = 'interactive'
LANG = 'en-US'
#TODO check what detailed returns
FORMAT = 'simple'
CHUNK = 1024

logger = logging.getLogger()

def get_token():
    url = 'https://api.cognitive.microsoft.com/sts/v1.0/issueToken'
    headers = {
        'Ocp-Apim-Subscription-Key': settings.MICROSOFT_KEY
    }
    r = requests.post(url, headers=headers)
    token = r.content
    return(token)

def recognize_speech(file_path, long=False):
    #TODO switch mode to conversation if long
    token = get_token()
    url = 'https://{0}.stt.speech.microsoft.com/speech/recognition/{1}/cognitiveservices/v1?language={2}&format={3}'.format(REGION, MODE, LANG, FORMAT)
    headers = {
        'Accept': 'application/json',
        'Ocp-Apim-Subscription-Key': settings.MICROSOFT_KEY,
        'Transfer-Encoding': 'chunked',
        'Content-type': 'audio/wav; codec=audio/pcm; samplerate=16000',
        'Authorization': 'Bearer {0}'.format(token)
    }
    r = requests.post(url, headers=headers, data=stream_file(file_path))
    speech = ""
    if r.ok:
        results = json.loads(r.content)
        if results["RecognitionStatus"] == "Success":
            speech = results["DisplayText"]
    else:
        logger.error("Cannot connect to Bing speech recognition. Cause: " + r.reason)
    return speech

def stream_file(file_path):
    with open(file_path, 'rb') as f:
        while True:
            data = f.read(CHUNK)
            if not data:
                break
            yield data
  




