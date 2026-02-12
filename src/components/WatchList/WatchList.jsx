import React from "react";
import { useOutletContext } from "react-router";
import CardList from "../CardList/CardList";
import Card from "../Card/Card";
import styles from "./WatchList.module.css";
import { useMovies } from "../../backend/hooks/movies.js";

export default function WatchList() {
  const { watchlist, onAddToWatchlist } = useOutletContext();

  const {
    items = [],
    status,
    error,
  } = useMovies({
    sortBy: "title",
    sortDir: "asc",
  });

  const watchlistMovies = React.useMemo(
    () => items.filter((m) => watchlist.has(Number(m.id))),
    [items, watchlist],
  );

  if (status === "loading") {
    return (
      <section className={styles.section}>
        <h1 className={styles.title}>Your Watchlist</h1>
        <p>Loading…</p>
      </section>
    );
  }

  if (status === "error") {
    return (
      <section className={styles.section}>
        <h1 className={styles.title}>Your Watchlist</h1>
        <p role="alert">
          Something went wrong{error ? `: ${String(error)}` : ""}
        </p>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Your Watchlist</h1>

      {watchlistMovies.length === 0 ? (
        <p>No movies in your watchlist yet.</p>
      ) : (
        <div className={styles.cardListWrapper}>
          <CardList
            items={watchlistMovies}
            renderItem={(movie) => {
              const img = `/dataset/images/${movie.image}`;
              return (
                <Card
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  image={img}
                  genre={movie.genre}
                  rating={movie.rating}
                  inWatchlist={watchlist.has(Number(movie.id))}
                  onAddToWatchlist={onAddToWatchlist}
                  onClick={() => {}}
                />
              );
            }}
          />
        </div>
      )}
    </section>
  );
}
