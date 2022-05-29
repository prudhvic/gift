import React from "react";
import ProductCard from "./ProductCard";
import { products } from "./productData";
import styles from "./ProductSection.module.css";

const ProductList = () => {
  return (
    <section>
      <h2 className={styles.title}>BestSellers</h2>
      <div className={styles.productContainer}>
        {products.map((product) => (
          <ProductCard
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice}
            img={product.img}
            key={product.id}
            stars={product.stars}
            isSale={product.isSale}
            location={product.location}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
