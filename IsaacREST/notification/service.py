from flask import Blueprint, request
import connection, logging
from bson.objectid import ObjectId

logger = logging.getLogger(__name__)

routines = connection.mongo.isaac.routines

def add(routine):
	logger.info("adding routine to db")
	if "_id" in routine:
		print(routine["_id"]["$oid"])
		routine["_id"] = ObjectId(routine["_id"]["$oid"])
		routines.update_one({
            '_id': routine["_id"]
            }, {
            '$set': routine
            })
	else:
		routines.insert(routine)

def get_all():
	return routines.find({})

def delete(id):
	routines.delete_one({'_id': ObjectId(id)})

def get(id):
	return routines.find_one({'_id': ObjectId(id)})