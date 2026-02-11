import { useEffect, useMemo, useState } from "react";
import { fetchMovies } from "../api.js";
import { searchMovies } from "../utils/search.js";
import {
  filterByGenre,
  filterByMinRating,
  sortMovies,
} from "../utils/filters.js";

export function useMovies({
  query = "",
  genre = "All",
  minRating,
  sortBy = "title",
  sortDir = "asc",
} = {}) {
  const [raw, setRaw] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      setStatus("loading");
      setError(null);
      try {
        const data = await fetchMovies();
        if (!mounted) return;
        setRaw(data);
        setStatus("ready");
      } catch (err) {
        if (!mounted) return;
        setError(err);
        setStatus("error");
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const items = useMemo(() => {
    let out = searchMovies(raw, query);
    out = filterByGenre(out, genre);
    out = filterByMinRating(out, minRating);
    out = sortMovies(out, sortBy, sortDir);
    return out;
  }, [raw, query, genre, minRating, sortBy, sortDir]);

  return { items, status, error, total: raw.length };
}
