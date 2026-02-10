import React from "react";
import { Navbar, Footer, CardList } from "../components/index.js";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <CardList title="Example" />
      </main>
    </>
  );
}
