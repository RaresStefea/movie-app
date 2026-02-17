import React from "react";
import { useOutletContext } from "react-router";
import { useNavigate, useSearchParams } from "react-router";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import CardList from "../CardList/CardList";
import { useMovies } from "../../backend/hooks/movies.js";

export default function MoviesContainer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  let watchlist = new Set();
  let onAddToWatchlist = () => {};

  try {
    const context = useOutletContext();
    if (context) {
      watchlist = context.watchlist || new Set();
      onAddToWatchlist = context.onAddToWatchlist || (() => {});
    }
  } catch (e) {
    throw new Error(e);
  }

  const q = searchParams.get("name") || "";
  const genre = searchParams.get("genre") || "";
  const minRating = searchParams.get("rate") || "";

  const updateParams = (partial, options = { replace: false }) => {
    const next = new URLSearchParams(searchParams);
    Object.entries(partial).forEach(([k, v]) => {
      if (v === "" || v == null) next.delete(k);
      else next.set(k, String(v));
    });
    setSearchParams(next, options);
  };

  const handleSearchSubmit = (nextQ) => {
    if (nextQ === "") {
      updateParams({ q: "", genre: "", minRating: "" });
    } else {
      updateParams({ q: nextQ });
    }
  };

  const handleGenreChange = (g) => {
    updateParams({ genre: g });
  };

  const handleMinRatingChange = (r) => {
    updateParams({ minRating: r });
  };

  const { items = [], status } = useMovies({
    query: q,
    genre: genre && genre !== "" ? genre : "All",
    minRating: minRating === "" ? undefined : Number(minRating),
    sortBy: "title",
    sortDir: "asc",
  });

  return (
    <section>
      <Search defaultValue={q} onSubmit={handleSearchSubmit} />
      <Filter
        genre={genre}
        minRating={minRating}
        onGenreChange={handleGenreChange}
        onMinRatingChange={handleMinRatingChange}
      />

      <CardList
        items={items}
        status={status}
        onCardClick={(id) => navigate(`/movie/${id}`)}
        onAddToWatchlist={onAddToWatchlist}
        inWatchlist={(id) => watchlist.has(id)}
      />
    </section>
  );
}
