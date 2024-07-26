from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.models import User
from app.config.database.db_session import async_session


async def get_user() -> list[User]:
    async with async_session() as session:
        result = await session.execute(select(User))
        return result.all()


async def add_user(session: AsyncSession, login: str, password: str) -> User:
    new_user = User(login=login, password=password)
    async with async_session() as session:
        session.add(new_user)
        await session.commit()
        return new_user
