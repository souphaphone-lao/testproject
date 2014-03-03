from testproject2.tests import *

class TestInputController(TestController):

    def test_index(self):
        response = self.app.get(url(controller='input', action='index'))
        # Test response...
