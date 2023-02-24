import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Error.module.css';
import img from './errorImg.png';

function Error() {
  return (
    <div className={styles.main}>
        <img style={{width:"20%"}} src={img} alt="error" />
        <h1>404</h1>
        <p>UH OH! You'r lost.</p>
        <p>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to home.</p>
        <NavLink to='/'><button className={styles.errorBtn}>HOME</button></NavLink>
    </div>
  )
}

export default Error