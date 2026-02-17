import React from "react";
import { useParams, useNavigate } from "react-router";
import style from "./FocusedMovie.module.css";
import Card from "../Card";
import { useMovies } from "../../backend/hooks/movies.js";

export default function FocusedMovie({
  watchlist = new Set(),
  onAddToWatchlist = () => {},
}) {
  const { id } = useParams();
  const navigate = useNavigate();

  const { items = [] } = useMovies();
  const movie = React.useMemo(
    () => items.find((m) => String(m.id) === String(id)),
    [items, id],
  );

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      navigate(-1);
    }
  };

  if (!movie) {
    return null;
  }

  const img = `/dataset/images/${movie.image}`;

  return (
    <div className={style.backdrop} onClick={handleBackdropClick}>
      <div className={style.modalContent}>
        <Card
          id={movie.id}
          title={movie.title}
          image={img}
          genre={movie.genre}
          rating={movie.rating}
          inWatchlist={watchlist.has(Number(movie.id))}
          onAddToWatchlist={onAddToWatchlist}
        />
      </div>
    </div>
  );
}
