from bson import ObjectId
from database import db

class Repository:
    def __init__(self, collection_name: str):
        self.collection = db[collection_name]

    async def insert_one(self, document: dict):
        result = await self.collection.insert_one(document)
        return str(result.inserted_id)

    async def fetch_all(self):
        records = await self.collection.find().to_list(None)
        return [{**record, "_id": str(record["_id"])} for record in records]

# Instantiate repositories for different collections
product_repository = Repository("products")
category_repository = Repository("categories")
user_repository = Repository("users")
