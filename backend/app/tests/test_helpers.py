"""Testing helpers."""
import unittest

from utils.helpers import str_from_email


class TestHelpers(unittest.TestCase):

    def test_str_from_email(self):
        s1 = "daniel.illner@lixa.ai"
        s2 = "illner@lixa.ai"
        self.assertEqual(str_from_email(s1), "danielillner")
        self.assertEqual(str_from_email(s2), "illner")


if __name__ == '__main__':
    unittest.main()
