class Configuration(object):

    DEBUG = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = 'mysql+mysqlconnector://root:1@127.0.0.1:5000/test1'


    #SQLALCHEMY_DATABASE_URI = mysql.connector.connect(user='root',
    #                        password='1',
    #                        host='127.0.0.1', database='test1',
    #                        auth_plugin='mysql_native_password')
