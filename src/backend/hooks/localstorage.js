import { useMemo, useState, useCallback, useEffect } from "react";

const WATCHLIST_KEY = "watchlist_ids";

export function useWatchlist() {
  const [watchlistIds, setWatchlistIds] = useState(() => {
    try {
      const raw = localStorage.getItem(WATCHLIST_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlistIds));
    } catch {
      throw new Error();
    }
  }, [watchlistIds]);

  const toggleWatchlist = useCallback((id) => {
    setWatchlistIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }, []);

  const watchlistSet = useMemo(() => new Set(watchlistIds), [watchlistIds]);

  return { watchlistIds, watchlistSet, toggleWatchlist };
}
