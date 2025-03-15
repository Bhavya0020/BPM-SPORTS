from pymongo import MongoClient

client = MongoClient('mongodb+srv://admin-mandeep:Test123@cluster0.bwjw1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

class MongoDBConnector:
    def __init__(self):
        self.client = client
        self.db = self.client["bpm-sports"]
    
    def fetch_all_records(self, collection_name: str):
        return list(self.db[collection_name].find())
        