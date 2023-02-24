import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../usecontext";
import styles from "./SingleProduct.module.css";
import ProductPrice from "../../helper/ProductPrice";
import { FaTruck, FaTruckLoading, FaShieldAlt } from "react-icons/fa";
import { TbReplace } from "react-icons/tb";
import Stars from "./Stars";
import AddCart from "./AddCart";

const API = "https://api.pujakaitem.com/api/products";

function SingleProduct() {
  const { getSingleProduct, singleProduct, isSingleLoading } =
    useProductContext();
  // console.log(singleProduct);

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  const {
    name,
    image = [{ url: "" }],
    stars,
    reviews,
    price,
    description,
    company,
    colors,
    stock
  } = singleProduct;
  // console.log(singleProduct);
  const [previewImg, setPreviewImg] = useState(image[0]);

  if (isSingleLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.lBox}>
          <div className={styles.smallImg}>
            {image?.map((curElem) => {
              return (
                <img
                  src={curElem.url}
                  alt={curElem.filename}
                  key={curElem.id}
                  onClick={() => setPreviewImg(curElem)}
                />
              );
            })}
          </div>
          <div className={styles.bigImg}>
            <img style={{ width: "100%" }} src={previewImg.url} alt="myImage" />
          </div>
        </div>
        <div className={styles.rBox}>
          <p className={styles.heading}>{name}</p>
          <Stars star={stars} review={reviews} />
          <p className={styles.mrp}>
            MRP:{" "}
            <del>
              <ProductPrice price={price + 250000} />
            </del>
          </p>
          <p className={styles.actualPrice}>
            Deal of the day: <ProductPrice price={price} />
          </p>
          <p>{description}</p>
          <div className={styles.facility}>
            <div>
              <FaTruck className={styles.icon} />
              <p>Free Delivery</p>
            </div>
            <div>
              <TbReplace className={styles.icon} />
              <p>30 Day Replacement</p>
            </div>
            <div>
              <FaTruckLoading className={styles.icon} />
              <p>Secured Loading</p>
            </div>
            <div>
              <FaShieldAlt className={styles.icon} />
              <p>2 Years Warranty</p>
            </div>
          </div>
          <p className={styles.available}>
            Available: <span>{stock > 0 ? "In Stock" : "Not Available"}</span>
          </p>
          <p className={styles.available}>
            ID: <span>{id}</span>
          </p>
          <p className={styles.available}>
            Brand: <span>{company}</span>
          </p>
          <hr style={{ backgroundColor: "#790979", height: "2px" }} />
          <AddCart product={singleProduct} />
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
