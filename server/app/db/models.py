from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, Integer, Numeric, ForeignKey
from server.app.config.database.db_session import Base
from enum import Enum


class Status(Enum):
    imported = "Импортирован"
    unimported = "Не импортирован"


class State(Enum):
    on_sale = "Продаётся"
    ready_for_sale = "Готов к продаже"
    out_of_stock = "Нет на складе"


class Item(Base):
    __tablename__ = "item"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id", ondelete="CASCADE"))
    offer_id: Mapped[str] = mapped_column(String(32))
    brand: Mapped[str] = mapped_column(String(32))
    sku: Mapped[str] = mapped_column(String(32))
    status: Mapped[Status]
    state: Mapped[State]
    price: Mapped[float] = mapped_column(Numeric())
    quantity: Mapped[int]

    user: Mapped["User"] = relationship("User", back_populates="items")


class User(Base):
    __tablename__ = "user"

    id: Mapped[int] = mapped_column(primary_key=True)
    login: Mapped[str] = mapped_column(String(32), unique=True)
    password: Mapped[str] = mapped_column(String(128))

    items: Mapped[list["Item"]] = relationship("Item", back_populates="user")
    goods_lists: Mapped[list["GoodsList"]] = relationship("GoodsList", back_populates="user")


class GoodsList(Base):
    __tablename__ = "goods_list"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id", ondelete="CASCADE"))

    user: Mapped["User"] = relationship("User", back_populates="goods_lists")



