from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import String


class Base(DeclarativeBase):
    pass


class Item(Base):
    __tablename__ = "item"

    offer_id: Mapped[int] = mapped_column(primary_key=True)
    


class User(Base):
    __tablename__ = "user"

    id: Mapped[int] = mapped_column(primary_key=True)
    login: Mapped[str] = mapped_column(String(32),unique=True)

