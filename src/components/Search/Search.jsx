import React from "react";
import style from "./Search.module.css";

export default function Search() {
  return (
    <section className={style.formWrapper} araia-label="Searching">
      <form
        className={style.searchWrapper}
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="site-search" className="sr-only">
          Search
        </label>
        <input
          id="site-search"
          type="text"
          placeholder="Search…"
          className={style.searchInput}
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
