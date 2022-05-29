import React from "react";
import styles from "./GiftsList.module.css";

const Pagination = ({ increase, decrease, setPage, totalPages, page }) => {
  console.log(page);
  let generateButtons = () => {
    let btns = [...new Array(totalPages).fill(0)].map((_, i) => i + 1);
    return btns.map((val) => (
      <button
        className={val === page + 1 ? styles.active : ""}
        onClick={() => setPage(val)}
      >
        {val}
      </button>
    ));
  };
  return (
    <div className={styles.pagination}>
      <button onClick={decrease}>prev</button>
      <div className={styles.btns}>{generateButtons()}</div>
      <button onClick={increase}>Next</button>
    </div>
  );
};

export default Pagination;
