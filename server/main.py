from fastapi import FastAPI
from pydantic import BaseModel
from core import get_version

app = FastAPI()

get_version()





