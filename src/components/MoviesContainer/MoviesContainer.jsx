import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import CardList from "../CardList/CardList";
import { useMovies } from "../../backend/hooks/movies.js";

export default function MoviesContainer() {
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

  const [genre, setGenre] = useState("");
  const [minRating, setMinRating] = useState("");
  const [search, setSearch] = useState("");

  const handleSearchSubmit = (q) => {
    setSearch(q);
    if (q === "") {
      setGenre("");
      setMinRating("");
    }
  };

  const { items = [], status } = useMovies({
    query: search,
    genre: genre || "All",
    minRating: minRating === "" ? undefined : Number(minRating),
    sortBy: "title",
    sortDir: "asc",
  });

  return (
    <section>
      <Search defaultValue="" onSubmit={handleSearchSubmit} />

      <Filter
        genre={genre}
        minRating={minRating}
        onGenreChange={setGenre}
        onMinRatingChange={setMinRating}
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
