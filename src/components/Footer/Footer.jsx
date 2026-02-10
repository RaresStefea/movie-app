import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.siteFooter} role="contentinfo">
      <div className={style.footerInner}>
        <span className={style.brand}>movier</span>
        <span className={style.dot} aria-hidden="true">
          @
        </span>
        <span className={style.year}>2026</span>
      </div>
    </footer>
  );
}
