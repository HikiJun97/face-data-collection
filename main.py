from pathlib import Path
from typing import Annotated
from fastapi import FastAPI, Request, Form, Query, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse, FileResponse, RedirectResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/src", StaticFiles(directory="src"), name="src")

templates = Jinja2Templates(directory="src")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# @app.get("/", response_class=HTMLResponse)
# async def main_page(request: Request):
#     return templates.TemplateResponse("index.html", {"request": request})


@app.get("/")
async def root():
    return RedirectResponse("/src/login.html")


@app.get("/value")
async def get_value():
    return {"value": "It's FastAPI!"}


@app.get("/readme")
async def readme():
    return FileResponse(
        "src/README.md", media_type="text/markdown", filename="README.md"
    )


@app.post("/form")
async def handle_form(youtube_url: Annotated[str, Form()]):
    print(youtube_url)
    return {"youtube_url": youtube_url, "msg": "SUCCESS"}


@app.post("/login")
async def login(
    user_id: Annotated[str, Form()],
    user_password: Annotated[str, Form()],
    remember_me: Annotated[str, Form()] = "False",
):
    remember = True if remember_me == "True" else False
    print(user_id, user_password, remember)
    return HTMLResponse(status_code=status.HTTP_200_OK)


@app.post("/check-video")
async def check_video(request: Request):
    return {"msg": "video check success"}


@app.get("/cropped_videos/", response_class=FileResponse)
async def get_video(
    video_id: Annotated[str, Query(min_length=11, max_length=11)],
    start: Annotated[str, Query(min_length=5, max_length=6)],
    end: Annotated[str, Query(min_length=5, max_length=6)],
):
    start_time: str = (
        f"{int(start[0:-4]):02d}:{int(start[-4:-2]):02d}:{int(start[-2:]):02d}"
    )

    end_time: str = f"{int(end[0:-4]):02d}:{int(end[-4:-2]):02d}:{int(end[-2:]):02d}"
    EXT = "mp4"

    ROOT_PATH: Path = Path(
        "/Users/sgn04088/face-crop-data-collection/src/collection/cropped_videos"
    )
    file_name = f"{video_id} [{start_time} - {end_time}].{EXT}"

    return FileResponse(path=ROOT_PATH / file_name)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app="main:app", host="0.0.0.0", port=8000, reload=True)
