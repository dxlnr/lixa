"""Main Entrypoint"""
from api.brand import brand_router
from api.collection import collection_router
from api.copilot import copilot_router
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(brand_router)
app.include_router(collection_router)
app.include_router(copilot_router)


@app.get("/")
def read_root():
    return "lixa backend up and running."
