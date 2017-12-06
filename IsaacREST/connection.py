from pymongo import MongoClient
import settings
from conda_build.config import Setting

mongo = MongoClient(settings.MONGO_HOST, settings.MONGO_PORT)
print('mongo initialized')