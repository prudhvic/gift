import React from "react";
import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  let navigate = useNavigate();
  let goToProducts = () => {
    navigate("/gifts");
  };
  return (
    <section className={styles.heroContainer}>
      <div className={styles.content}>
        <div className={styles.headers}>
          <h2>Right</h2>
          <div className={styles.flex}>
            <h3>Person,</h3>
            <h3>Gifts</h3>
          </div>
        </div>
        <p className={styles.yellow}>Get rid of cringe gifting sites.</p>
        <p className={styles.light}>Now send gifts quickly and easily</p>
        <button className={styles.btnAction} onClick={goToProducts}>
          Gift now <img src="/images/send.png" alt="send gift" />
        </button>
      </div>
      <div className={styles.img}>
        <img src="/images/hero.png" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
