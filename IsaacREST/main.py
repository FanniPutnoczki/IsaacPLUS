from flask import Flask, Blueprint
from flask_restful import Resource, Api
import skills.hi
from notification.controller import notif_api
from skills.controller import skills_api
import logging, settings
import skills.service
from flask_cors import CORS, cross_origin

logging.basicConfig(level=settings.LOG_LEVEL)

app = Flask(__name__)

# config
api = Api(app)
cors = CORS(app)

# blueprints
app.register_blueprint(notif_api, url_prefix='/api/notifications')
app.register_blueprint(skills_api, url_prefix='/api/skills')


skills.service.insertSkills()

if __name__ == '__main__':
    app.run(debug=True, host= settings.HOST, port=settings.PORT)