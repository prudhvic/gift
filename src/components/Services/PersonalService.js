import React from "react";
import styles from "./Service.module.css";
const PersonalService = () => {
  return (
    <section className={styles.contactContainer}>
      <div className={styles.formContent}>
        <div className={styles.content}>
          <h2>Want a personalized service</h2>
          <h3>Contact our Special customer service</h3>
        </div>
        <div className={styles.contact}>
          <input type="number" placeholder="+911234567890"/>
          <img src="/images/phone.svg" />
        </div>
        <div className={styles.email}>
          <input type="email" placeholder="user@example.com"/>
          <img src="/images/email.svg" />
        </div>
      </div>
      <div className={styles.img}>
        <img src="/images/service.jpg" alt="service" />
      </div>
    </section>
  );
};

export default PersonalService;
