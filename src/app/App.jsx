import React from "react";
import { Navbar, Footer } from "../components";
import MoviesContainer from "../backend/index";
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
