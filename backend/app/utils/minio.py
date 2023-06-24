"""MinIO Bridge"""
import io
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


def push_bytes_to_s3(client: Minio, bucket: str, obj_name: str, data: bytes, content_type: str) -> str:
    """Pushes a single bytes object to MinIO S3 bucket.

    :param client: Minio Client Object.
    :param bucket: S3 bucket name.
    :param obj_name: Object name that will be used in storage.
    :param data: Actual bytes that is the data.
    :param content_type: 
    :returns: String message.
    """
    if not client.bucket_exists(bucket):
        client.make_bucket(bucket)
    try:
        print("in s3", content_type, type(content_type))
        print("in s3 bucket", bucket, type(bucket))
        print("in s3 obj_name", obj_name, type(obj_name))
        client.put_object(
            bucket,
            obj_name,
            io.BytesIO(data),
            len(data),
            content_type,
        )
        return f'Successfully uploaded {obj_name} to {bucket}'
    except S3Error as err:
        return f'Failed to upload {obj_name} to {bucket}. Error: {err}'
