"""Init and utils."""
from zope.i18nmessageid import MessageFactory

import logging


PACKAGE_NAME = "extranet_cmc"

_ = MessageFactory("extranet_cmc")

logger = logging.getLogger("extranet_cmc")
