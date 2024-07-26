from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from sqlalchemy.orm import DeclarativeBase
from app.config.database.db_config import settings


async_engine = create_async_engine(url=settings.DB_URL_asyncpg, echo=True)
async_session = async_sessionmaker(async_engine)


class Base(DeclarativeBase):
    def __repr__(self):
        cols = []
        for idx, col in enumerate(self.__table__.columns.keys()):
            cols.append(f"{col}={getattr(self, col)}")

        return f"<{self.__class__.__name__} {', '.join(cols)}>"


async def get_session():
    async with async_session() as session:
        yield session
