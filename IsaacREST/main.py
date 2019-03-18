from flask import Flask, Blueprint
from flask_restful import Resource, Api
from routines.controller import notif_api
from skills.controller import skills_api
from streams.controller import streams_api
import logging
import settings
import skills.service
import streams.service
from routines import handler as routines
import threading
import brain

app = Flask(__name__)

api = Api(app)

app.register_blueprint(notif_api, url_prefix='/api/routines')
app.register_blueprint(skills_api, url_prefix='/api/skills')
app.register_blueprint(streams_api, url_prefix='/api/streams')

skills.service.insertSkills()
streams.service.startStreams()
routines.start_routine_listener()

if __name__ == '__main__':

	skills.service.validate_skills()

	logger = logging.getLogger()
	logger.info("starting brain")
	brain_thread = threading.Thread(target = brain.brain, args=(routines.queue, skills.service.complex_skill_queue,))
	brain_thread.start()
	
	app.run(debug=False, host= settings.HOST, port=settings.PORT)
