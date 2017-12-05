from flask import Flask
from flask_restful import Resource, Api
import skills.hi
import settings
from flask_pymongo import PyMongo
from notification.controller import notif_api

app = Flask(__name__)

api = Api(app)

app.register_blueprint(notif_api, url_prefix='/api/notifications')
app.register_blueprint(notif_api, url_prefix='/api/skills')

api.add_resource(skills.hi.Hi, '/skills' + skills.hi.URL)

if __name__ == '__main__':
    app.run(debug=True, host= '0.0.0.0', port=5000)