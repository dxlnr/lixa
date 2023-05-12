const API_BASE = '/api';

async function getJson<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(await response.text());
  } else {
    return response.json();
  }
}
