
'''
Created on 2017. nov. 29.

@author: Fox
'''
from main import app
    
@app.route('/he')
def he():
    return {"he": "he"}
        