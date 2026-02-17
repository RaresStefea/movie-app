import React from "react";
import { Link, useLocation, NavLink } from "react-router";
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
          <NavLink to="/" aria-label="Home" className={styles.link}>
            <Logo />
          </NavLink>
        </div>

        <ul className={styles.center}>
          <li>
            <NavLink
              to="/"
              className={styles.link}
              data-active={isHome ? "true" : "false"}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/watchlist"
              className={styles.link}
              data-active={isWatchlist ? "true" : "false"}
            >
              Watchlist
            </NavLink>
          </li>
        </ul>

        <div className={styles.right}>
          <NavLink to="/" aria-label="settings" className={styles.link}>
            <SettingsIcon />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
