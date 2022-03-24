import React from "react";
import "./Project.css";

export default function Project() {
  function previewProject() {
    return window.location.href = "https://devansh-bharadwaj.github.io/spotify-clone/"
  }
  function previewProject1() {
    return window.location.href="https://devansh-bharadwaj.github.io/Magic-Note/"
  }
  function previewProject2() {
    return window.location.href="https://devansh-bharadwaj.github.io/BookMyRoom/"
  }
  function previewProject3() {
    return window.location.href="https://Devansh-bharadwaj.github.io/textUtils"
  }
  return (
    <div className="container mt-5">
      <p className="pHeading">Projects</p>
      <div className="pMain">
        <div className="pLeftBox">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Spotify Clone</h5>
              <div className="cBox">
                <div>
                  <p className="card-text">
                    Build the Spotify clone to listen music.<br></br>
                    HTML, CSS, Javascript
                  </p>
                </div>
                <button
                  className="pBtn" onClick= {previewProject}
                >
                  Preview
                </button>
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
                    HTML, CSS, Javascript
                  </p>
                </div>
                <button
                  className="pBtn" onClick= {previewProject1}
                >
                  Preview
                </button>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Book My Room</h5>
              <div className="cBox">
                <div>
                  <p className="card-text">
                    Build the website for booking a room in a hotel.<br></br>
                    ReactJs
                  </p>
                </div>
                <button
                  className="pBtn" onClick={previewProject2}
                >
                  Preview
                </button>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">TextUtils</h5>
              <div className="cBox">
                <div>
                  <p className="card-text">
                    textUtils application with multi-functionality.<br></br>
                    ReactJs
                  </p>
                </div>
                <button
                  className="pBtn" onClick={previewProject3}
                >
                  Preview
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pRightBox">
          <img src="https://firebase.google.com/images/homepage/hero-illo_1x.png" />
        </div>
      </div>
    </div>
  );
}
