from flask import Blueprint, request
import os, pkgutil, settings, logging
from bson.json_util import dumps
import streams.service as service

streams_api = Blueprint('streams_api', __name__)

logger = logging.getLogger()

@streams_api.route('/<id>/get', methods=['GET'])
def getStreamData(id):
    # logger.info('getting stream data ' + id)
    # for stream in service.getStreams():
    #     if (stream.ID == id):
    #         return dumps(stream.getValue())
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
                "view": stream.VALUE
            })
    return dumps(streams)

