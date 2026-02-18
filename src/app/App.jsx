import React from "react";
import { Outlet, useParams } from "react-router";
import { createPortal } from "react-dom";
import { Navbar, Footer } from "../components";
import FocusedMovie from "../components/FocusedMovie";
import styles from "./App.module.css";
import { useWatchlist } from "../backend/hooks/localstorage.js";

export default function App() {
  const { watchlistSet, toggleWatchlist } = useWatchlist();
  const { id } = useParams();

  const outletContext = React.useMemo(
    () => ({
      watchlist: watchlistSet,
      onAddToWatchlist: toggleWatchlist,
    }),
    [watchlistSet, toggleWatchlist],
  );

  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.main}>
        <Outlet context={outletContext} />
        {id &&
          createPortal(
            <FocusedMovie
              watchlist={watchlistSet}
              onAddToWatchlist={toggleWatchlist}
            />,
            document.body,
          )}
      </main>
      <Footer />
    </div>
  );
}
