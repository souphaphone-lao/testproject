from paste.urlparser import PkgResourcesParser
from pylons.middleware import error_document_template
from webhelpers.html.builder import literal
from pylons.templating import render_mako as render
from testproject2.lib.base import BaseController

class AboutController(BaseController):
    """Generates error documents as and when they are required.

    The ErrorDocuments middleware forwards to ErrorController when error
    related status codes are returned from the application.

    This behaviour can be altered by changing the parameters to the
    ErrorDocuments middleware in your config/middleware.py file.

    """
    def index(self,id=None):
        """Render the error document"""

        template = "about.html"

        return render(template,{"names":[id,'Souphaphone','Phathitmyxay']})

   
