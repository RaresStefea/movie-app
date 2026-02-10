import React from "react";
import style from "./Card.module.css";

export default function Card({
  id,
  title,
  image,
  genre,
  rating,
  onClick,
  onAddToWatchlist,
  inWatchlist = false,
}) {
  const handleCardActivate = () => onClick?.(id);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.(id);
    }
  };

  const handleAddToWatchlist = (e) => {
    e.stopPropagation();
    onAddToWatchlist?.(id);
  };

  return (
    <article
      className={style.card}
      role="button"
      tabIndex={0}
      onClick={handleCardActivate}
      onKeyDown={handleKeyDown}
      aria-label={`${title}, ${genre}, rating ${rating}`}
    >
      <div className={style.thumbWrapper}>
        <img
          className={style.thumb}
          src={image}
          alt={`${title} poster`}
          loading="lazy"
        />
        <span className={style.ratingBadge}>{Number(rating).toFixed(1)}</span>
      </div>

      <div className={style.meta}>
        <h3 className={style.title}>{title}</h3>
        <div className={style.row}>
          <span className={style.genre}>{genre}</span>
        </div>
        <div className={style.actions}>
          <button
            type="button"
            className={`${style.watchBtn} ${inWatchlist ? style.active : ""}`}
            onClick={handleAddToWatchlist}
            aria-pressed={inWatchlist}
            aria-label={
              inWatchlist ? "Remove from watchlist" : "Add to watchlist"
            }
            title={inWatchlist ? "Remove from watchlist" : "Add to watchlist"}
          >
            {inWatchlist ? "In Watchlist" : "Add to Watchlist"}
          </button>
        </div>
      </div>
    </article>
  );
}
