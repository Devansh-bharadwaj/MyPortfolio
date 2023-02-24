import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';
import styles from './CartAmountToggle.module.css';

function CartAmountToggle({ amount, setIncrement, setDecrement }) {

  return (
    <div className={styles.main}>
        <button className={styles.quantBtn} onClick={() => setDecrement()}><FaMinus/></button>
        <div>{amount}</div>
        <button className={styles.quantBtn} onClick={() => setIncrement()}><FaPlus /></button>
    </div>
  )
}

export default CartAmountToggle