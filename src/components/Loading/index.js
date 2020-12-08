import React from "react";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      <img src="/assets/spinner.gif" className={styles.loader} alt="loading" />
    </div>
  );
}
