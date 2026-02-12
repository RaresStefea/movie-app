import React from "react";
import { Navbar, Footer, MoviesContainer } from "../components";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <MoviesContainer />
      </main>
      <Footer />
    </>
  );
}
