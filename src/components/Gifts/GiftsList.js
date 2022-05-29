import React, { useState } from "react";
import { dispalyStar } from "../helpers/getStars";
import styles from "./GiftsList.module.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const GiftsList = ({ gifts }) => {
  let [heartId, setHeartId] = useState();
  let [isClick, setIsClick] = useState(false);
  let updateHeart = (id) => {
    setHeartId(id);
    setIsClick((prev) => !prev);
  };
  return (
    <div className={styles.gifts}>
      {gifts.map((gift) => (
        <div key={gift._id} className={styles.gift}>
          <img src={gift.images[0].image} alt={gift.title} />
          <div className={styles.giftFlex}>
            <h2 className={styles.title}>{gift.title}</h2>
            <h2 className={styles.rating}>{dispalyStar(gift.rating)}(10)</h2>
          </div>
          <p>{gift.location}</p>
          <div className={styles.pricing}>
            <button className={styles.btn}>
              {gift.isSale ? "sale" : "not sale"}
            </button>
            <h3 className={styles.price}>
              <span className={styles.oldPrice}>{gift.oldPrice}</span>{" "}
              {gift.price}RS only
            </h3>
          </div>
          <div className={styles.heart} onClick={() => updateHeart(gift._id)}>
            {isClick && heartId === gift._id ? <FaHeart /> : <FaRegHeart />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GiftsList;
