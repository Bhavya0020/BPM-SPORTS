from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URI = "mongodb+srv://admin-mandeep:Test123@cluster0.bwjw1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
DB_NAME = "bpm-sports"

client = AsyncIOMotorClient(MONGO_URI)
db = client[DB_NAME]
