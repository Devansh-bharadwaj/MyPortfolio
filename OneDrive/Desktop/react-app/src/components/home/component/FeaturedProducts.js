import React from "react";
import { NavLink } from "react-router-dom";
import { useProductContext } from "../../usecontext";
import styles from "./FeaturedProducts.module.css";
import ProductPrice from "../../../helper/ProductPrice";

function FeaturedProducts() {
  const { isLoading, featuredProducts } = useProductContext();
//   console.log(featuredProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.outer}>
        <div className={styles.main}>
          <h5 style={{ color: "gray" }}>CHECK NOW</h5>
          <h2>Our Feature Services</h2>
          <div className={styles.cards}>
            {featuredProducts.map((featuredProduct) => {
              return (
                <NavLink key={featuredProduct.id} style={{textDecoration:"none"}} className={styles.featureLink} to={`/singleProduct/${featuredProduct.id}`}>
                <div className={styles.card} key={featuredProduct.id}>
                  <div className={styles.img}> 
                    <img src={featuredProduct.image} alt="featured" />
                    <div className={styles.overImageText}>
                        {featuredProduct.category}
                    </div>
                  </div>
                  <div className={styles.aboutFeature}>
                    <div>{featuredProduct.name}</div>
                    <div>{<ProductPrice price={featuredProduct.price} />}</div>
                  </div>
                </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProducts;
