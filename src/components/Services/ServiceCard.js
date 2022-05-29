import React from "react";
import styles from "./Service.module.css";
const ServiceCard = ({ img, label, info }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={label} />
      <h3 className={styles.label}>{label}</h3>
      <p className={styles.info}>{info}</p>
    </div>
  );
};

export default ServiceCard;
