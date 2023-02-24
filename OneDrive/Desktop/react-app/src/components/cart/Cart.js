import React from "react";
import { useCartContext } from "../CartContext";
import styles from "./Cart.module.css";
import { AiTwotoneDelete } from "react-icons/ai";
import ProductPrice from "../../helper/ProductPrice";
import { NavLink } from "react-router-dom";
import img from "./emptyCart.png";
import { useAuth0 } from "@auth0/auth0-react";

function Cart() {
  const { cart, removeItem, removeCartItems, total_amount, shipping_fee } =
    useCartContext();
  console.log(cart);
  const { isAuthenticated, user } = useAuth0();

  if (cart.length === 0) {
    return (
      <div className={styles.noItem}>
        <img style={{ width: "24%" }} src={img} alt="empty cart" />
        No Item In Cart.
      </div>
    );
  }
  return (
    <div className={styles.main}>
      {/* {isAuthenticated && <div className={styles.userInfo}>
        <img src={user.picture} alt={user.name} />
        <h4>Welcome, <span>{user.name}</span> To Your Cart.</h4>
      </div>} */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map((curElem) => {
            const { id } = curElem;
            return (
              <tr key={id}>
                <td>
                  <div className={styles.dataBox}>
                    <div className={styles.img}>
                      <img src={curElem.image} alt={curElem.name} />
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      {curElem.name}
                      <div className={styles.colorDiv}>
                        Color:{" "}
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            backgroundColor: curElem.myColor,
                            borderRadius: "50%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <ProductPrice price={curElem.price} />
                </td>
                <td>
                  <div className={styles.quantIcon}>{curElem.amount}</div>
                </td>
                <td>
                  <ProductPrice price={curElem.price * curElem.amount} />
                </td>
                <td>
                  <AiTwotoneDelete
                    className={styles.deleteIcon}
                    onClick={() => removeItem(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {cart?.map((curElem) => {
        const { id } = curElem;
        return (
          <div key={id} className={styles.listView}>
            <div className={styles.imgBox}>
              <img src={curElem.image} alt={curElem.name} />
            </div>
            <div className={styles.contentBox}>
              <div className={styles.flexBox1}>
                <div className={styles.inerBox}>{curElem.name}</div>
                <div className={styles.inerBox}>
                  <ProductPrice price={curElem.price} />
                </div>
              </div>
              <div className={styles.flexBox1}>
                <div className={styles.colorBox}>
                  Color:{" "}
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      backgroundColor: curElem.myColor,
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
                <div className={styles.inerBox}>
                  Quantity: <span>{curElem.amount}</span>
                </div>
              </div>
              <div className={styles.flexBox1}>
                <div className={styles.inerBox}>
                  SubTotal:{" "}
                  <span>
                    <ProductPrice price={curElem.price * curElem.amount} />
                  </span>
                </div>
                <div className={styles.inerBox}>
                  <AiTwotoneDelete
                    className={styles.deleteIcon}
                    onClick={() => removeItem(id)}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <NavLink to="/products">
        <button className={styles.contBtn}>CONTINUE SHOPPING</button>
      </NavLink>
      <button className={styles.clearBtn} onClick={removeCartItems}>
        CLEAR CART
      </button>
      <div className={styles.cartSumMain}>
        <div className={styles.cartSum}>
          <p>
            Subtotal:{" "}
            <span>
              <ProductPrice price={total_amount} />
            </span>
          </p>
          <p>
            Shipping Fees:{" "}
            <span>
              <ProductPrice price={shipping_fee} />
            </span>
          </p>
          <hr />
          <p>
            Order Total:{" "}
            <span>
              <ProductPrice price={total_amount + shipping_fee} />
            </span>
          </p>
        </div>
        {/* <a href="https://www.buymeacoffee.com/devanshbha8?new=1"><button style={{width:"198px"}} className={styles.contBtn}>BUY NOW</button></a> */}
        <a href="https://www.buymeacoffee.com/devanshbha8" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee" style={{width:"198px", marginTop:"27px"}} /></a>
      </div>
    </div>
  );
}

export default Cart;
