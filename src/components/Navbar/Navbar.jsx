import React from "react";
import { useLocation } from "react-router";
import styles from "./Navbar.module.css";
import Logo from "../Logo";
import SettingsIcon from "../SettingsIcon";

export default function Navbar() {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isWatchlist = location.pathname.startsWith("/watchlist");

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <div className={styles.left}>
          <a href="/" aria-label="Home" className={styles.link}>
            <Logo />
          </a>
        </div>

        <ul className={styles.center}>
          <li>
            <a
              href="/"
              className={styles.link}
              data-active={isHome ? "true" : "false"}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/watchlist"
              className={styles.link}
              data-active={isWatchlist ? "true" : "false"}
            >
              Watchlist
            </a>
          </li>
        </ul>

        <div className={styles.right}>
          <a href="/" aria-label="settings" className={styles.link}>
            <SettingsIcon />
          </a>
        </div>
      </nav>
    </header>
  );
}
