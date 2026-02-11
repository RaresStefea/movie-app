export function searchMovies(movies, query) {
  if (!query) return movies;
  const needle = query.trim().toLowerCase();
  return movies.filter((m) =>
    [m.title, m.genre, m.director, m.cast?.join(" ")]
      .filter(Boolean)
      .some((field) => {
        console.log(String(field).toLowerCase().includes(needle));
        return String(field).toLowerCase().includes(needle);
      }),
  );
}
