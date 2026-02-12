import React from "react";
import Card from "../Card";
import style from "./CardList.module.css";

export default function CardList({
  items = [],
  status = "idle",
  onCardClick,
  onAddToWatchlist,
  inWatchlist = () => false,
  renderItem,
  errorMessage = "",
}) {
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
        <p>{errorMessage || "Something went wrong."}</p>
      </section>
    );
  }

  if (status === "ready" && items.length === 0) {
    return <section className={style.wrapper} aria-live="polite" />;
  }

  return (
    <section className={style.wrapper}>
      <div className={style.grid} role="list">
        {items.map((item) => {
          if (renderItem) {
            return (
              <div role="listitem" key={item.id} className={style.cell}>
                {renderItem(item)}
              </div>
            );
          }

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
                inWatchlist={inWatchlist(item.id)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
