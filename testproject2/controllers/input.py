import logging

from pylons import request, response, session, tmpl_context as c, url
from pylons.controllers.util import abort, redirect
from pylons.decorators import jsonify

from testproject2.lib.base import BaseController, render

from testproject2.model.database_tables import Profile

from testproject2.model.meta import Session
log = logging.getLogger(__name__)

class InputController(BaseController):

    def index(self):
        # Return a rendered template
        return render('/input.html')
        # or, return a string
       # return 'Hello World'

    @jsonify
    def saveform(self):
        first = request.params.get('first')
        last = request.params.get('last')
        age = request.params.get('age')

        new_profile = Profile(firstname=first, lastname=last, age=age)
        #new_profile.firstname = first
        #new_profile.lastname = last
        #new_profile.age = age

        Session.add (new_profile)
        Session.commit()

        return {'success': True, 'msg': "Hello %s %s" % (first, last) }

    @jsonify
    def getform(self):
        

        rows = []
        #for i in Session.query(OdkLoggerInstance, AuthUser).join(AuthUser, OdkLoggerInstance.user_id == AuthUser.id).all():
        for i in Session.query(Profile).all():
           #log.debug(i)
            rows.append({'id': i.id, 'firstname': i.firstname, 'lastname': i.lastname, 'age': i.age})

        return {"rows":rows}

        
