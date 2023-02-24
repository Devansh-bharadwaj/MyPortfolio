import React from 'react';
import styles from './Trusted.module.css';
import { FcAlphabeticalSortingAz } from 'react-icons/fc';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdMotionPhotosOn } from 'react-icons/md';
import { FcFeedIn, FcLightAtTheEndOfTunnel } from 'react-icons/fc';

function Trusted() {
  return (
    <div style={{backgroundColor: "#863a6f1c", paddingTop:"52px"}}>
        <h4 style={{textAlign:"center"}}>Trusted By 1000+ Companies</h4>
        <div className={styles.main}>
            <div><FcAlphabeticalSortingAz />ZEINA</div>
            <div>LOGIC<AiOutlinePlus /></div>
            <div><MdMotionPhotosOn />MOTION</div>
            <div><FcFeedIn />FAKECART</div>
            <div><FcLightAtTheEndOfTunnel />DRIBBLE</div>
        </div>
    </div>
  )
}

export default Trusted