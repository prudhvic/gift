import React from "react";
import styles from "./Layout.module.css";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
const Layout = () => {
  return (
    <section className={styles.cardContainer}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2>Gift dad needs....</h2>
          <p>Insulin tester and more health gifts</p>
          <button>
            Explore useful gifts
            <span className={styles.exploreIcon}>
              <IoChevronForwardCircleOutline />
            </span>
          </button>
        </div>
      </div>
      <div>
        <img src="/images/explore2.jpg" alt="explore" />
      </div>
    </section>
  );
};

export default Layout;
