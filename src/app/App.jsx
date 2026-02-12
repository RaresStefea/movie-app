import React from "react";
import { Outlet } from "react-router";
import { Navbar, Footer } from "../components";
import styles from "./App.module.css";
import { useWatchlist } from "../backend/hooks/localstorage.js";

export default function App() {
  const { watchlistSet, toggleWatchlist } = useWatchlist();

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Outlet
          context={{
            watchlist: watchlistSet,
            onAddToWatchlist: toggleWatchlist,
          }}
        />
      </main>
      <Footer />
    </>
  );
}
