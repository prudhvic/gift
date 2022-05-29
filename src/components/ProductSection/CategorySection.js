import React from "react";
import styles from "./Category.module.css";
const CategorySection = () => {
  return (
    <section className={styles.categorySection}>
      <h2 className={styles.title}>Categories</h2>
      <div className={styles.cardContainer}>
        <div className={styles.panel}>
          <img src="/images/birthday.jpg" alt="birthday" />
          <h3>Birthdays</h3>
        </div>
        <div className={styles.panel}>
          <img src="/images/aniversaries.jpg" alt="aniversaries" />
          <h3>Aniversaries</h3>
        </div>
        <div className={styles.panel}>
          <img src="/images/occassion.jpg" alt="occassion" />
          <h3>occassion</h3>
        </div>
        <div className={styles.panel}>
          <img src="/images/age.jpg" alt="by age" />
          <h3>By Age</h3>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
