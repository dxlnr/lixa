"""Bare Scraper using Instaloader"""
import os
import glob
import shutil
from pathlib import Path
import instaloader
from instaloader import Instaloader, Profile

from env import ScrapeEnv
from minio_api import init_minio_client


def scrape_insta_profile_instaloader(profil_name: str):
    """."""
    loader = Instaloader(dirname_pattern=f"{profil_name}/instagram")
    profile = Profile.from_username(loader.context, profil_name)
    for post in profile.get_posts():
        loader.download_post(post, target=profile.username)


def upload_local_dir_to_s3(minio_client, local_path: str, bucket_name: str):
    """."""
    assert os.path.isdir(local_path)

    for local_file in glob.glob(local_path + "/**"):
        local_file = local_file.replace(os.sep, "/")
        if not os.path.isfile(local_file):
            upload_local_directory_to_minio(local_file, bucket_name)
        else:
            remote_path = os.path.join(local_file[1 + len(local_path) :])
            remote_path = remote_path.replace(os.sep, "/")
            remote_path = os.path.join(local_path, remote_path)

            minio_client.fput_object(bucket_name, remote_path, local_file)


def scrape_insta(profil_name: str) -> None:
    """Very simple and inefficient instagram scraping & uploading to s3 bucket."""
    save_dir = f"{profil_name}/instagram"
    envars = Path().cwd() / ".env"
    env = ScrapeEnv()
    env.merge_from_file(envars)

    endpoint, access_key, secret_key, region = env.get_minio_essentials()
    minio_client = init_minio_client(
        endpoint, access_key, secret_key, region, secure=False
    )

    scrape_insta_profile_instaloader(profil_name)
    upload_local_dir_to_s3(minio_client, save_dir, "lixa-brand-content-support")
    try:
        shutil.rmtree(profil_name)
    except OSError as e:
        print("Error: %s - %s." % (e.filename, e.strerror))
