"""Brand API Endpoints"""
import os
# import base64
import io
import json
from collections import defaultdict
from PIL import Image
from bson import json_util

from fastapi import FastAPI, File, UploadFile, APIRouter, HTTPException
from werkzeug.utils import secure_filename

from utils import get_project_root
from db import db, minio_client, Brand
from utils.minio import push_to_s3

brand_router = APIRouter()
cbrands = db["brands"]
s3_bucket = "lixa-logos"


@brand_router.post("/api/brand/create_brand")
async def create_brand(brand: Brand):
    """Instantiates new brand in mongodb table.

    :param brand: Custom Brand object.
    """
    res = await cbrands.insert_one(brand.dict())
    print(res)
    # return res
    # try:
    #     j = request.get_json()
    # except:
    #     pass
    # b = defaultdict(lambda: "")
    # for k, v in j.items():
    #     b[k] = v
    # cbrands.insert_one(b)
    return {"status": "success"}


# @brand_blueprint.route("/update_brand/<string:user_email>", methods=["POST"])
# @cross_origin(supports_credentials=True)
# def update_brand(user_email: str):
#     """Handles the upload of a brand logo.

#     :param user_email: The key is used to identify the brand.
#     """
#     try:
#         j = request.get_json()
#     except:
#         return jsonify({"status": "No data sent."}), 500
#     try:
#         b = cbrands.find_one({"user": user_email})
#     except:
#         return jsonify({"status": "No brand for this user found."}), 500
#     if request.method == "POST":
#         cbrands.update_one(b, {"$set": j })
#         user = json.loads(json_util.dumps(b))
#         return jsonify(user), 200


@brand_router.post("/api/brand/brand_logo_upload/{user}")
async def brand_logo_upload(file: UploadFile = File(...), user: str):
    """Handles the upload of a brand logo.

    :param brand_name: The key is used to identify the brand.
    """
    try:
        contents = await file.read()
        # with open(file.filename, 'wb') as f:
        #     f.write(contents)
    except Exception:
        return {"message": "There was an error uploading the file."}
    finally:
        file.close()

    filename = secure_filename(file.filename)
    size = os.fstat(contents.fileno()).st_size

    minio_client.put_object(s3_bucket, filename, contents, size)
    cbrands.find_one_and_update(
        {"user": user}, {"$set": {"logo": filename}}
    )
    return {"message": f"Successfully uploaded {file.filename}."}
        # if "im" in request.files:
        #     upload = request.files["im"]
        #     filename = secure_filename(upload.filename)
        #     size = os.fstat(upload.fileno()).st_size

        #     minio_client.put_object(s3_bucket, filename, upload, size)
        #     cbrands.find_one_and_update(
        #         {"user": user}, {"$set": {"logo": filename}}
        #     )
        # else:
        #     return jsonify({"status": "No image found."}), 404
        # return jsonify({"status": "Image upload successful"}), 200


@brand_router.get("/api/brand/get_brand/{user}")
async def get_brand(user):
    """Returns brand document.

    :param user: Fins a user based on their email string.
    """
    try:
        b = await cbrands.find_one({"user": user})
    except:
        raise HTTPException(404, "No user found.")
    return json.loads(json_util.dumps(b))
