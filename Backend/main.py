from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
import os
key = 'DATABASE_URL'
DATABASE_URL = os.getenv(key) 

app = FastAPI()

# Allow frontend (Next.js) to communicate with backend (FastAPI)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust based on your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

try:
    client = MongoClient(DATABASE_URL).admin.command("ping")
    print("This work!!")
except:
    print("Error connecting DB")


@app.get("/")
def read_root():
    return {"message": "Hello, World!"}
