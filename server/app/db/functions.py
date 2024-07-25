from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.models import User


async def get_user(session: AsyncSession) -> list[User]:
    result = await session.execute(select(User))
    return result.all()


async def add_user(session: AsyncSession, login: str, password: str):
    new_user = User(login=login, password=password)
    session.add(new_user)
    return new_user
