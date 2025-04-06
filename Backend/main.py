from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from models import ProductModel, CategoryModel, UserModel
from repositories import product_repository, category_repository, user_repository

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}

@app.get("/shop")
async def get_all_products():
    try:
        return await product_repository.fetch_all()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/add-product")
async def create_product(product: ProductModel):
    try:
        inserted_id = await product_repository.insert_one(product.dict())
        return {"message": "Product created successfully", "id": inserted_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/add-category")
async def create_category(category: CategoryModel):
    try:
        inserted_id = await category_repository.insert_one(category.dict())
        return {"message": "Category created successfully", "id": inserted_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/add-user")
async def create_user(user: UserModel):
    try:
        inserted_id = await user_repository.insert_one(user.dict())
        return {"message": "User created successfully", "id": inserted_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


    
if __name__ == "__main__":
    uvicorn.run('main:app', port=8000, host="0.0.0.0", reload=True)