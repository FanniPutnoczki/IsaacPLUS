from flask import Blueprint, request
import os, pkgutil, settings, logging
from bson.json_util import dumps
import streams.service as service

streams_api = Blueprint('streams_api', __name__)

logger = logging.getLogger()

@streams_api.route('/<id>/get', methods=['GET'])
def getStreamData(id):
    return dumps(service.getStreamData(id))


@streams_api.route('/', methods=['GET'])
def getStreams():
    logger.info('getting streams ')
    streams = []
    for stream in service.getStreams():
        streams.append({
                "name": stream.NAME,
                "id": stream.ID,
                "refreshRate": stream.REFRESH_RATE,
                "view": stream.VIEW
            })
    return dumps(streams)

