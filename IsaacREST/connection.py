from pymongo import MongoClient
import settings

mongo = MongoClient(settings.MONGO_HOST, settings.MONGO_PORT)
print('mongo initialized')