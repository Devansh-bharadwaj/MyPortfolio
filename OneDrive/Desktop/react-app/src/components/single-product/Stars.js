import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import styles from './Stars.module.css';

function Stars({ star, review}) {
    const ratingStar = Array.from({ length: 5}, (elem, index) => {
        let num = index + 0.5;
        return (
          <span key={index}>
            {star >= index + 1 ? (<FaStar className={styles.icon} />) : star >= num ? (<FaStarHalfAlt className={styles.icon} />) : (<AiOutlineStar className={styles.icon} />)}
          </span>
        )
      })
  return (
    <div className={styles.main}>
        {ratingStar}
        <span className={styles.review}>({review} Customer reviews)</span>
    </div>
  )
}

export default Stars