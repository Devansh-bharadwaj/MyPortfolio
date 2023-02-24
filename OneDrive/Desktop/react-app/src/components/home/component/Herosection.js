import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Herosection.module.css';
import shoppingImg from './shoppingImg.png';

function Herosection({ myData }) {
    const { name } = myData; 
  return (
    <div>
        <div className={styles.main}>
            <div className={styles.lBox}>
                <p style={{fontFamily: `'Kaushan Script', cursive`, fontSize:"28px"}}>Welcome to</p>
                <h1>{name}</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe tempora accusantium autem quasi, accusamus, natus optio suscipit tenetur nobis eveniet architecto velit? Sapiente voluptate facere unde eos nulla, ad atque magnam voluptates corporis soluta.</p>
                <NavLink to='/products'>
                <button className={styles.shopBtn}>Shop Now</button>
                </NavLink>
            </div>
            <div className={styles.rBox}>
                <div className={styles.imgBox}>
                    <img src={shoppingImg} alt="heroImg" />
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herosection