import React from "react";
import { Outlet, useLocation } from "react-router";
import { createPortal } from "react-dom";
import { Navbar, Footer } from "../components";
import FocusedMovie from "../components/FocusedMovie";
import MoviesContainer from "../components/MoviesContainer";
import styles from "./App.module.css";
import { useWatchlist } from "../backend/hooks/localstorage.js";

export default function App() {
  const { watchlistSet, toggleWatchlist } = useWatchlist();
  const location = useLocation();
  const isMovieModal = location.pathname.startsWith("/movie/");

  const outletContext = {
    watchlist: watchlistSet,
    onAddToWatchlist: toggleWatchlist,
  };

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {isMovieModal ? (
          <MoviesContainer />
        ) : (
          <Outlet context={outletContext} />
        )}
        {isMovieModal &&
          createPortal(
            <FocusedMovie
              watchlist={watchlistSet}
              onAddToWatchlist={toggleWatchlist}
            />,
            document.body,
          )}
      </main>
      <Footer />
    </>
  );
}
