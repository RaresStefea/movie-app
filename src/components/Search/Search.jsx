import React, { useEffect, useState } from "react";
import style from "./Search.module.css";

export default function Search({ defaultValue = "", onSubmit }) {
  const [text, setText] = useState(defaultValue);

  useEffect(() => {
    setText(defaultValue);
  }, [defaultValue]);

  return (
    <section className={style.formWrapper} aria-label="Searching">
      <form
        className={style.searchWrapper}
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit?.(text.trim());
        }}
      >
        <label htmlFor="site-search" className="sr-only">
          Search
        </label>
        <input
          id="site-search"
          type="text"
          placeholder="Search…"
          className={style.searchInput}
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="Search movies"
          autoComplete="off"
        />
        <button
          type="submit"
          className={style.searchButton}
          aria-label="Search"
        >
          Search
        </button>
      </form>
    </section>
  );
}
