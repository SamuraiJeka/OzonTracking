import os
import sys
import asyncio

from db.functions import get_version, create_tables
from fastapi import FastAPI

sys.path.insert(1, os.path.join(sys.path[0], ".."))

app = FastAPI()

# get_version()
# create_tables()
