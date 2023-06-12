import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/2000" className={styles.item}>
          <span className={styles.title}>2000 - 2010</span>
        </Link>
        <Link href="/portfolio/2010" className={styles.item}>
          <span className={styles.title}>2010 - 2020</span>
        </Link>
        <Link href="/portfolio/2020" className={styles.item}>
          <span className={styles.title}>2020 - Current</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;