from paste.urlparser import PkgResourcesParser
from pylons.middleware import error_document_template
from webhelpers.html.builder import literal
from pylons.templating import render_mako as render
from testproject2.lib.base import BaseController, render


from testproject2.model.meta import Session
from testproject2.model.database_tables import OdkLoggerInstance

class DatabaseController(BaseController):
    """Generates error documents as and when they are required.

    The ErrorDocuments middleware forwards to ErrorController when error
    related status codes are returned from the application.

    This behaviour can be altered by changing the parameters to the
    ErrorDocuments middleware in your config/middleware.py file.

    """
    def index(self,):
        """Render the error document"""

        template = "database.html"

        rows=[]

        for i in Session.query(OdkLoggerInstance).all():
            rows.append({'id':i.id,'xform_id':i.xform_id,'user_id':i.user_id})

        return render(template,{"rows":rows})

   
