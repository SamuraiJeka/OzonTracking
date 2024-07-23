import sys

sys.path.append("..")

from sqlalchemy import create_engine, text
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from sqlalchemy.orm import sessionmaker, DeclarativeBase
from server.app.config.database.db_config import settings


sync_engine = create_engine(url=settings.DB_URL_psycopg, echo=True)

async_engine = create_async_engine(url=settings.DB_URL_asyncpg, echo=True)


sync_session = sessionmaker(sync_engine)
async_session = async_sessionmaker(async_engine)


class Base(DeclarativeBase):
    def __repr__(self):
        cols = []
        for idx, col in enumerate(self.__table__.columns.keys()):
            cols.append(f"{col}={getattr(self, col)}")

        return f"<{self.__class__.__name__} {', '.join(cols)}>"
