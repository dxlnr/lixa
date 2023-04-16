"""Scraper"""
from scraper import ScrapeEnv, Scraper



def main():
    env = ScrapeEnv()
    env.merge_from_file(".env")

    s = Scraper(env)
    r = s.request_post()


if __name__ == "__main__":
    main()
