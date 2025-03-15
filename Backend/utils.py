from connector.mongodb_connector import MongoDBConnector

def serialize_document(doc):
    doc["_id"] = str(doc["_id"])  # Convert ObjectId to string
    return doc

def get_shop_records():
    connector = MongoDBConnector()
    records = connector.fetch_all_records('products')
    return [serialize_document(record) for record in records]