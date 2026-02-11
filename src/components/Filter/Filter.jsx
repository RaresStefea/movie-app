import React from "react";
import style from "./Filter.module.css";

export default function Filter({
  genre = "",
  minRating = "",
  onGenreChange,
  onMinRatingChange,
  genres = [
    "action",
    "adventure",
    "animation",
    "comedy",
    "drama",
    "fantasy",
    "horror",
    "mystery",
    "romance",
    "scifi",
    "thriller",
  ],
}) {
  return (
    <div className={style.filterBar} aria-label="Filters">
      <div className={style.itemCard}>
        <div className={style.inline}>
          <label htmlFor="genre" className={style.badgeLabel}>
            Genre
          </label>
          <div className={style.selectWrap}>
            <select
              id="genre"
              className={style.select}
              value={genre}
              onChange={(e) => onGenreChange?.(e.target.value)}
            >
              <option value="">Choose…</option>
              {genres.map((g) => (
                <option key={g} value={g}>
                  {toTitleCase(g)}
                </option>
              ))}
            </select>
            <span className={style.caret} aria-hidden>
              ▾
            </span>
          </div>
        </div>
      </div>

      <div className={style.itemCard}>
        <div className={style.inline}>
          <label htmlFor="rating" className={style.badgeLabel}>
            Rating
          </label>
          <div className={style.selectWrap}>
            <select
              id="rating"
              className={style.select}
              value={minRating}
              onChange={(e) => {
                const v = e.target.value;
                onMinRatingChange?.(v === "" ? "" : Number(v));
              }}
            >
              <option value="">Choose…</option>
              <option value="9">9+ ★</option>
              <option value="8">8+ ★</option>
              <option value="7">7+ ★</option>
              <option value="6">6+ ★</option>
              <option value="5">5+ ★</option>
            </select>
            <span className={style.caret} aria-hidden>
              ▾
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function toTitleCase(s) {
  return s.replace(/\w\S*/g, (t) => t[0].toUpperCase() + t.slice(1));
}
