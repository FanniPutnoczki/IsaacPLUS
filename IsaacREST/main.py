from flask import Flask
from flask import Blueprint
from flask_restful import Resource, Api
import skills.hi
from notification.controller import notif_api
from skills.controller import skills_api
import logging
import settings

logging.basicConfig(level=settings.LOG_LEVEL)

app = Flask(__name__)

# config
api = Api(app)

# blueprints
app.register_blueprint(notif_api, url_prefix='/api/notifications')
app.register_blueprint(skills_api, url_prefix='/api/skills')


api.add_resource(skills.hi.Hi, '/skills' + skills.hi.URL)


if __name__ == '__main__':
    app.run(debug=True, host= '0.0.0.0', port=5000)