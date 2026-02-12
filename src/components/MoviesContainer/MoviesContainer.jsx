import React, { useState } from "react";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import CardList from "../CardList/CardList";
import { useMovies } from "../../backend/hooks/movies.js";

export default function MoviesContainer() {
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

  const { items, status } = useMovies({
    query: search,
    genre: genre || "All",
    minRating: minRating === "" ? undefined : Number(minRating),
    sortBy: "title",
    sortDir: "asc",
  });

  return (
    <section style={{ display: "grid", gap: 12 }}>
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
        onCardClick={(id) => console.log("open movie", id)}
        onAddToWatchlist={() => {}}
        inWatchlist={() => false}
      />
    </section>
  );
}
