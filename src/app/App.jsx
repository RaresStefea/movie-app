import React from "react";
import { Outlet } from "react-router";
import { createPortal } from "react-dom";
import { Navbar, Footer } from "../components";
import FocusedMovie from "../components/FocusedMovie";
import styles from "./App.module.css";
import { useWatchlist } from "../backend/hooks/localstorage.js";

export default function App() {
  const { watchlistSet, toggleWatchlist } = useWatchlist();

  const outletContext = React.useMemo(
    () => ({
      watchlist: watchlistSet,
      onAddToWatchlist: toggleWatchlist,
    }),
    [watchlistSet, toggleWatchlist],
  );

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Outlet context={outletContext} />
        {createPortal(
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
