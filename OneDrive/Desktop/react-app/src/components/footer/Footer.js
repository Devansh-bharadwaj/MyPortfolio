import React from 'react';
import styles from './Footer.module.css';
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

function Footer() {
  return (
    <>
    <div className={styles.main}>
        <div className={styles.overDiv}>
            <div style={{width:"164px",color:"gray"}}>Ready To Get Started? Talk To Us Today.</div>
            <div><a href="mailto:devanshbharadwaj1@gmail.com"><button className={styles.startBtn}>Get Started</button></a></div>
        </div>
        <div className={styles.insideFooter}>
            <div className={styles.columnDiv}>
                <h5>SHOPPING ZONE</h5>
                <p>Get The Best And Valuable Item Here</p>
            </div>
            <div className={styles.columnDiv}>
                <h5>Subscribe To Get Important Updates.</h5>
                <input className={styles.footerInput} type="email" name="email" placeholder='Your Email' />
                <button className={styles.subsBtn}>SUBSCRIBE</button>
            </div>
            <div className={styles.columnDiv}>
                <h5>Follow Us</h5>
                <div>
                    <a href="https://github.com/Devansh-bharadwaj">
                    <FaGithubSquare className={styles.icon}/>
                    </a>
                    <a href="https://www.linkedin.com/in/devansh-bharadwaj/">
                    <FaLinkedin className={styles.icon} />
                    </a>
                    <a href="https://www.instagram.com/sketch_with_deva/">
                    <FaInstagramSquare className={styles.icon} />
                    </a>
                </div>
            </div>
            <div className={styles.columnDiv}>
                <h5>Call Us</h5>
                <a href="tel:+91 9149117878" style={{textDecoration: "none", color:"#ffadbc"}}><p>+91 9149117878</p></a>
            </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.underLine}>
            <div>&#169;{new Date().getFullYear()} SHOPPINGZONE ALL RIGHTS RESERVED.</div>
            <div>PRIVACY POLICY <br></br>TERMS & CONDITIONS</div>
        </div>
    </div>
    </>
  )
}

export default Footer