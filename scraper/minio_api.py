"""MinIO Bridge"""
from minio import Minio
from minio.error import S3Error


def init_minio_client(
    endpoint: str, access_key: str, secret_key: str, region: str, secure: bool = True
) -> Minio:
    """Initializes MinIO Client, established connections & returns it.

    :param endpoint: Hostname of a S3 service.
    :param access_key: (Optional) Access key (aka user ID) of your account in S3 service.
    :param secret_key: (Optional) Secret Key (aka password) of your account in S3 service.
    :param region: (Optional) Region name of buckets in S3 service.
    :param secure: (Optional) Flag to indicate to use secure (TLS) connection to S3 service or not.
    """
    try:
        return Minio(endpoint, access_key, secret_key, secure, region)
    except S3Error as err:
        raise ConnectionError(err)


def push_to_s3(client: Minio, bucket: str, obj_path: str, obj_name: str):
    """Pushes a single object to MinIO S3 bucket.

    :param client: Minio Client Object.
    :param bucket: S3 bucket name.
    :param obj_path: Path to the object which should get push to storage.
    :param obj_na m_client: minio.Minio,me: Object name in the bucket.
    """
    if not client.bucket_exists(bucket):
        client.make_bucket(bucket)
    try:
        client.fput_object(
            bucket,
            obj_name,
            obj_path,
        )
    except:
        pass
