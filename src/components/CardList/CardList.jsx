import React, { useEffect, useState } from "react";
import Card from "../Card";
import style from "./CardList.module.css";

export default function CardList({
  onCardClick,
  onAddToWatchlist,
  watchlist = new Set(),
}) {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    let isMounted = true;
    setStatus("loading");

    fetch("/dataset/movies.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return;
        setItems(Array.isArray(data) ? data : []);
        setStatus("ready");
      })
      .catch((err) => {
        console.error("Failed to load movies.json:", err);
        if (!isMounted) return;
        setStatus("error");
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (status === "loading") {
    return (
      <section className={style.wrapper}>
        <p>Loading…</p>
      </section>
    );
  }

  if (status === "error") {
    return (
      <section className={style.wrapper}>
        <p>
          Couldnt load <code>/dataset/movies.json</code>. Check the file path.
        </p>
      </section>
    );
  }

  return (
    <section className={style.wrapper}>
      <div className={style.grid} role="list">
        {items.map((item) => {
          const img = `/dataset/images/${item.image}`;

          return (
            <div role="listitem" key={item.id} className={style.cell}>
              <Card
                id={item.id}
                title={item.title}
                image={img}
                genre={item.genre}
                rating={item.rating}
                onClick={onCardClick}
                onAddToWatchlist={onAddToWatchlist}
                inWatchlist={watchlist.has(item.id)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
