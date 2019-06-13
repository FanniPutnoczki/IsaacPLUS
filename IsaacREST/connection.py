from pymongo import MongoClient
import settings

mongo = MongoClient(settings.MONGO_URI)
print('mongo initialized')
