import logging
import os

'''
APP SETTINGS
'''
APP_NAME="I.S.A.A.C."
ASSISTANT_NAME="isaac"
USER_NAME="fanni"

'''
PATH SETTINGS
'''
MAIN_PATH = os.path.dirname(os.path.realpath(__file__))
RESPONSES_PATH= os.path.join(MAIN_PATH, "responses")
NOTIFS_PATH=os.path.join(MAIN_PATH, "notifications")
ANSWERS_PATH=os.path.join(MAIN_PATH, 'resources', 'answers')

'''
LOGGING
'''
LOG_LEVEL=logging.INFO
LOG_FORMAT='%(asctime)s - %(name)s - %(levelname)s - %(message)s'

'''
VOICE
'''
CORPUS_PATH=os.path.join(MAIN_PATH, 'resources', 'sphinx', 'corpus.txt')
HMM_PATH=os.path.join(MAIN_PATH, 'resources', 'sphinx', 'HMM-en-us')
LM_PATH=os.path.join(MAIN_PATH, 'resources', 'sphinx', 'lm.lm')
DICT_PATH=os.path.join(MAIN_PATH, 'resources', 'sphinx', 'dict.dic')
SENTENCE_PATH=os.path.join(MAIN_PATH, 'resources', 'sphinx', 'sentences')
WORD_PATH=os.path.join(MAIN_PATH, 'resources', 'sphinx', 'words')
CMU_DICT_PATH=os.path.join(MAIN_PATH, 'resources', 'sphinx', 'cmudict.dict')
WORD_AND_SENTS_PATH=os.path.join(MAIN_PATH, 'resources', 'sphinx', 'words_and_sentences')
