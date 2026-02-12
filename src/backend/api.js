const DATA_URL = "/dataset/movies.json";

export async function fetchMovies() {
  const res = await fetch(DATA_URL);
  if (!res.ok) throw new Error(`${res.status}`);
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}
