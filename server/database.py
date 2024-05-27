from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from dotenv import load_dotenv, dotenv_values
load_dotenv()

config = dotenv_values()
engene = create_async_engine(config.get("db_url"))

session = async_sessionmaker(engene, expire_on_commit=False)