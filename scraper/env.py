"""Helpers for dealing with .env"""
import copy
from dataclasses import dataclass


@dataclass
class ScrapeEnv:
    MINIO_ENDPOINT = ""
    MINIO_ACCESS_KEY = ""
    MINIO_SECRET_KEY = ""
    MINIO_REGION = ""

    def __setitem__(self, key, value):
        """."""
        setattr(self, key, value)

    def __getitem__(self, key):
        """."""
        return getattr(self, key)

    def get_minio_essentials(self) -> tuple[str]:
        """."""
        return (
            self.MINIO_ENDPOINT,
            self.MINIO_ACCESS_KEY,
            self.MINIO_SECRET_KEY,
            self.MINIO_REGION,
        )

    def get_env_data_as_dict(self, path: str = ".env") -> dict:
        """Sets env vars from .env file in root."""
        with open(path, "r") as f:
            return dict(
                tuple(line.replace("\n", "").split("="))
                for line in f.readlines()
                if not line.startswith("#")
            )

    def merge_from_file(self, path: str = ".env"):
        """Load a config from a YAML string encoding."""
        with open(path, "r") as f:
            try:
                env_as_dict = dict(
                    tuple(line.replace("\n", "").split("="))
                    for line in f.readlines()
                    if not line.startswith("#")
                )
                self._merge_a_into_self(env_as_dict, self, [])
            except Exception as exc:
                print(exc)

    def _merge_a_into_self(self, external_d: dict, self_cls: dict, key_list: list):
        """Merge a .env dict into self, clobbering the
        options in b whenever they are also specified in a.

        :param self_cls: Self object.
        :param external_d: External dictionary extracted from .env.
        """
        for k, v_ in external_d.items():
            v = copy.deepcopy(v_)

            if hasattr(self_cls, k):
                self_cls[k] = v
