import React from "react";
import styles from "./ProductSection.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import Star from "./Star";
import { dispalyStar } from "../helpers/getStars";
const ProductCard = (props) => {
  return (
    <div className={styles.product}>
      <button className={styles.optionIcon}>
        <BsThreeDotsVertical />
      </button>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <div>
        {dispalyStar(props.stars)}
        <a href="www.google.com">{props.rating}</a>
      </div>
      <div className={styles.productDetails}>
        <div className={styles.price}>
          <h3>
            <span className={styles.oldPrice}>{props.oldPrice}</span>
            {props.price} RS/-
          </h3>
          <button className={styles.saleBtn}>
            {props.isSale ? "sale" : "not sale"}
          </button>
        </div>
        <p className={styles.location}>{props.location}</p>
      </div>
    </div>
  );
};
export default ProductCard;
