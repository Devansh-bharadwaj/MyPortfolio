import React, { useState } from 'react';
import styles from './AddCart.module.css';
import { FaCheck } from 'react-icons/fa'
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../CartContext';

function AddCart({ product }) {
  const { id, stock, price, colors } = product;
  const [myColor, setMyColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const { addToCart } = useCartContext();
  // console.log(myColor)

  const setDecrement = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }
  


  const setIncrement = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }

  return (
    <div>
      <p style={{display: 'flex', alignItems: 'center'}}>Colors:
        {colors.map((curElem, i) => {
            return (
                <button key={i} style={{backgroundColor: curElem}} className={myColor === curElem ? styles.active : styles.colorPicker} onClick={() => setMyColor(curElem)}>
                  {myColor === curElem ? <FaCheck className={styles.icon} /> : null}
                </button>
            )
        })}
      </p>
      <CartAmountToggle amount={amount} setIncrement={setIncrement} setDecrement={setDecrement} />
      <NavLink to='/cart' onClick={() => addToCart(id, amount, myColor, product )}>
        <button className={styles.addCart}>ADD TO CART</button>
      </NavLink>
    </div>
  )
}

export default AddCart