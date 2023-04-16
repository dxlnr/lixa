import requests


class Scraper:
    def __init__(self, env):
        self.env = env
        self.link = "https://scraper-api.smartproxy.com/v1/scrape"
        self.headers= {"Content-Type": "application/json"}

    def request_post(self):
        """."""
        task_params = {
            "url": "https://www.instagram.com/p/CrGFg6BrNst/",
            "target": "instagram_post",
            "locale": "en-us",
            "geo": "United States",
        }
        response = requests.post(
            self.link,
            headers=self.headers,
            json=task_params,
            auth=(self.env.SMARTPROXY_USER, self.env.SMARTPROXY_PW),
        )

        return response
