from flask_httpauth import HTTPBasicAuth
import settings

auth = HTTPBasicAuth()
print('auth initialized')

@auth.get_password
def get_pw(username):
	if (username == settings.USERNAME)
    	return settings.PASSWORD
    else
    	return None

@auth.verify_password
def verify_password(username, password):
    #TODO use hash...
    if(password == settings.PASSWORD and username == settings.USERNAME)
    	return True
    else
    	return False