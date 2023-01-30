import React from "react";
import styles from "./Project.module.css";
import img from "./projectImg.png";
import pharmacy from "./pharmacy.png";
import textUtils from "./textUtils.png";
import magicNotes from "./magicNotes.png";
import dashboard from "./dashboard.png";

export default function Project() {
  function previewProject() {
    return (window.location.href =
      "https://devansh-bharadwaj.github.io/pharmacyProducts");
  }
  function previewProject1() {
    return (window.location.href =
      "https://devansh-bharadwaj.github.io/Magic-Note/");
  }
  function previewProject2() {
    return (window.location.href =
      "https://devansh-bharadwaj.github.io/EdyodaReactFinal/");
  }
  function previewProject3() {
    return (window.location.href =
      "https://shoppingzone23.netlify.app/");
  }
  return (
    <div className="container my-5">
      <p className={styles.pHeading}>Projects</p>
      <div className={styles.pMain}>
        {/* <div className="pLeftBox">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">pharmacyProducts</h5>
              <div className="cBox">
                <div>
                  <p className="card-text">
                    Build the Pharmacy products webApp.<br></br>
                    -React.Js
                  </p>
                </div>
                <div>
                <button
                  className="pBtn" onClick= {previewProject}
                >
                  Preview
                </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Magic Notes</h5>
              <div className="cBox">
                <div>
                  <p className="card-text">
                    Don't forget anything, Add your note to Magic Notes<br></br>
                    -HTML, CSS, Javascript
                  </p>
                </div>
                <div>
                <button
                  className="pBtn" onClick= {previewProject1}
                >
                  Preview
                </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Admin Dashboard</h5>
              <div className="cBox">
                <div>
                  <p className="card-text">
                    Build the Admin dashboard webApp. To see this use password and username as 'admin'.<br></br>
                    -React.Js
                  </p>
                </div>
                <div>
                <button
                  className="pBtn" onClick={previewProject2}
                >
                  Preview
                </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">TextUtils</h5>
              <div className="cBox">
                <div>
                  <p className="card-text">
                    TextUtils application with multi-functionality.<br></br>
                    -ReactJs
                  </p>
                </div>
                <div>
                <button
                  className="pBtn" onClick={previewProject3}
                >
                  Preview
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pRightBox">
          <img src={img} alt="projects" />
        </div> */}
        <div className={styles.cardProject}>
          <div className={styles.imgbox}>
            <img src={textUtils} />
            <h2>Shoppingzone</h2>
          </div>
          <div className={styles.content}>
            <p>
            It is an e-commerce website with login functionality.<br></br>
                    -ReactJs
            </p>
            <button className={styles.pBtn} onClick={previewProject3}>
              Preview
            </button>
          </div>
        </div>
        <div className={styles.cardProject}>
          <div className={styles.imgbox}>
            <img src={pharmacy} />
            <h2>Pharmacy Products</h2>
          </div>
          <div className={styles.content}>
            <p>
              Build the Pharmacy products webApp.<br></br>
              -React.Js
            </p>
            <button className={styles.pBtn} onClick={previewProject}>
              Preview
            </button>
          </div>
        </div>
        <div className={styles.cardProject}>
          <div className={styles.imgbox}>
            <img src={magicNotes} />
            <h2>magicNotes</h2>
          </div>
          <div className={styles.content}>
            <p>
            Don't forget anything, Add your note to Magic Notes<br></br>
                    -HTML, CSS, Javascript
            </p>
            <button className={styles.pBtn} onClick={previewProject1}>
              Preview
            </button>
          </div>
        </div>
        <div className={styles.cardProject}>
          <div className={styles.imgbox}>
            <img src={dashboard} />
            <h2>Admin Dashboard</h2>
          </div>
          <div className={styles.content}>
            <p>
            Build the Admin dashboard webApp. To see this use password and username as 'admin'.<br></br>
                    -React.Js
            </p>
            <button className={styles.pBtn} onClick={previewProject2}>
              Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
