from flask import Flask
from config import Configuration
from flask_sqlalchemy import SQLAlchemy

from posts.blueprint import posts
#from app import models  #myadd 1
#from models import db   #myadd 2
#import pymysql
import sys
print(sys.version)
app = Flask (__name__)
app.config.from_object(Configuration)

db = SQLAlchemy(app) # delet app
app.register_blueprint(posts, url_prefix='/blog')
