from flask import Flask
from flask_restful import Resource, Api
import skills.hi
import settings
from flask_pymongo import PyMongo
from notification.controller import notif_api

app = Flask(__name__)

app.config['MONGO_DBNAME'] = settings.MONGO_DBNAME
app.config['MONGO_URI'] = settings.MONGO_URI

api = Api(app)

mongo = PyMongo(app)

app.register_blueprint(notif_api, url_prefix='/api/notification')

api.add_resource(skills.hi.Hi, '/api' + skills.hi.URL)



if __name__ == '__main__':
    app.run(debug=True, host= '0.0.0.0', port=5000)