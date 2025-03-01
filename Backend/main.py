from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from starlette.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
import uvicorn
import os
connection_str = 'mongodb+srv://bhavyalearncode:LearnCode%402023@ecommercedb.jmthh.mongodb.net/ECommerceDB?retryWrites=true&w=majority'
app = FastAPI()
# Allow frontend (Next.js) to communicate with backend (FastAPI)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust based on your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# try:
#     client = MongoClient(connection_str)
#     db = client['ECommerceDB']
#     res = db['Product'].find()
#     for i in res:
#         print(i)
#     print(f"This work!!")
#     client.close()
# except:
#     print("Error connecting DB")

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}

@app.get("/shop")
def read_root():
    try:
        client = MongoClient(connection_str)
        db = client['ECommerceDB']
        res = db['Product'].find()
        data = []
        for i in res:
            print(i)
            data.append(i)
        print(f"This work!!")
        client.close()
        return JSONResponse(jsonable_encoder(data))
    except Exception as e:
        return "Error connecting DB"
    

uvicorn.run(app, port=8000, host="0.0.0.0")