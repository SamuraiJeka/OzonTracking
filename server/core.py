from database import sync_engine, async_engine, sync_session, async_session, Base
from sqlalchemy import text

def get_version():
    with sync_engine.connect() as conn:
        res = conn.execute(text("SELECT VERSION()"))
        print(res.one())

def create_tables():
    Base.metadata.drop_all(sync_engine)
    Base.metadata.create_all(sync_engine)
    print("УБЕЙТЕ МЕНЯ!")
