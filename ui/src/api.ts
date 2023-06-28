// export const API_BASE = 'http://192.168.88.18:8000/api';
// export const API_BASE = 'http://0.0.0.0:5000/api';
export const API_BASE = 'http://127.0.0.1:8000/api';

async function getJson<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(await response.text());
  } else {
    return response.json();
  }
}
