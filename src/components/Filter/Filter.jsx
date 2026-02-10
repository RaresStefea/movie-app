import React from "react";
import style from "./Filter.module.css";

export default function Filter() {
  return (
    <div className={style.filterBar} aria-label="Filters">
      <div className={style.itemCard}>
        <div className={style.inline}>
          <label htmlFor="genre" className={style.badgeLabel}>
            Genre
          </label>
          <div className={style.selectWrap}>
            <select id="genre" className={style.select} defaultValue="">
              <option value="" disabled>
                Choose…
              </option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="animation">Animation</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="fantasy">Fantasy</option>
              <option value="horror">Horror</option>
              <option value="mystery">Mystery</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">SciFi</option>
              <option value="thriller">Thriller</option>
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
            <select id="rating" className={style.select} defaultValue="">
              <option value="" disabled>
                Choose…
              </option>
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
