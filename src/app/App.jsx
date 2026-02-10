import React from "react";
import {
  Navbar,
  Footer,
  CardList,
  Search,
  Filter,
} from "../components/index.js";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Search />
        <Filter />
        <CardList />
      </main>
      <Footer />
    </>
  );
}
