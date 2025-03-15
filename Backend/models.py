from pydantic import BaseModel, HttpUrl
from typing import Optional
from datetime import datetime

class ProductModel(BaseModel):
    id: Optional[str] = None
    name: str
    description: str
    price: int
    stock_quantity: int
    image_url: Optional[HttpUrl] = None
    category_id: str
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    seller: str


class CategoryModel(BaseModel):
    id: str
    name: str
    parent_id: Optional[str] = None
    description: Optional[str] = None


class UserModel(BaseModel):
    user_name: str
    display_name: str
    is_admin: bool