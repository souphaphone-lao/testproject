from testproject2.model.meta import Base
from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

class OdkLoggerInstance(Base):
    __tablename__ = 'odk_logger_instance'
    id= Column(Integer,primary_key=True)
    xform_id= Column (Integer)
    user_id= Column (Integer)

class Profile(Base):
    __tablename__= 'tblprofile'
    id= Column(Integer,primary_key=True)
    firstname=Column (String)
    lastname=Column (String)
    age=Column (Integer)
