import React from "react";
import styles from "./ProductSection.module.css";
import ProductCard from "./ProductCard";
import { products } from "./productData";
import CategorySection from "./CategorySection";
const ProductSection = () => {
  return (
    <main className={styles.main}>
      <CategorySection />
      <section>
        <h2 className={styles.title}>BestSellers</h2>
        <div className={styles.productContainer}>
          {products.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductSection;
