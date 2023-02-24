import React from 'react';
import styles from './Services.module.css';
import { CiDeliveryTruck } from 'react-icons/ci';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { BiShieldQuarter } from 'react-icons/bi';
import { FaHandHoldingUsd } from 'react-icons/fa';

function Services() {
  return (
    <div>
        <div className={styles.main}>
            <div className={styles.subMain}>
                <CiDeliveryTruck className={styles.icon}/>
                <p style={{textAlign:"center"}}>Super Fast And Free Delivery</p>
            </div>
            <div className={styles.main1}>
                <div className={styles.submain1}>
                    <BiShieldQuarter className={styles.icon1} />
                    <p style={{textAlign:"center"}}>Non Contact Shipping</p>
                </div>
                <div className={styles.submain1}>
                    <FaHandHoldingUsd className={styles.icon1} />
                    <p style={{textAlign:"center"}}>Money Back Guarantee</p>
                </div>
            </div>
            <div className={styles.subMain}>
                <RiSecurePaymentLine className={styles.icon} />
                <p style={{textAlign:"center"}}>Super Secure Payment System</p>
            </div>
        </div>
    </div>
  )
}

export default Services