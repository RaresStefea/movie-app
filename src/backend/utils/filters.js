function normalizeGenre(val) {
  if (!val) return "";
  return String(val).toLowerCase().replace(/\s+/g, "");
}

export function filterByGenre(movies, selectedGenre) {
  if (!selectedGenre || selectedGenre === "All") return movies;
  const target = normalizeGenre(selectedGenre);
  return movies.filter((m) => normalizeGenre(m.genre) === target);
}

export function filterByMinRating(movies, minRating) {
  if (minRating == null || minRating === "") return movies;
  return movies.filter((m) => Number(m.rating) >= Number(minRating));
}

export function sortMovies(movies, sortKey = "title", direction = "asc") {
  const dir = direction === "desc" ? -1 : 1;
  const copy = [...movies];

  copy.sort((a, b) => {
    const A = a?.[sortKey];
    const B = b?.[sortKey];
    if (A == null && B == null) return 0;
    if (A == null) return 1;
    if (B == null) return -1;

    if (typeof A === "number" && typeof B === "number") {
      return (A - B) * dir;
    }
    return String(A).localeCompare(String(B)) * dir;
  });

  return copy;
}
