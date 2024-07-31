from fastapi import APIRouter

from app.api.routes.test import route as test

api_router = APIRouter()
api_router.include_router(test.router, prefix="/test", tags=["test"])