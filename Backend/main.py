from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from starlette.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
import uvicorn
import os
from utils import get_shop_records

app = FastAPI()
# Allow frontend (Next.js) to communicate with backend (FastAPI)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust based on your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}

@app.get("/shop")
def read_root():
    try:
        data = get_shop_records()
        return data
        # return JSONResponse(jsonable_encoder(data))
    # except Exception as e:
        # return "Error connecting DB"
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=str(e))
    

uvicorn.run(app, port=8000, host="0.0.0.0")