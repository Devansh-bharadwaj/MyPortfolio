import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="container my-5">
      <div className="sHeading">Skills</div>
      <div className="sHeading2">My Professional Skills</div>
      <div className="sMain">
        <div>
          <div className="sLeftBox">
            Proficient in all the aspect of Front-End Web development. Here is
            my skill level as per each Language, you can also checkout some of
            my work samples in <i>project</i> section.
          </div>
          {/* <div class="progressBox">
            <h2>HTML5</h2>
            <div className="htmlBox">
              <span>90%</span> 
            </div>
          </div>
          <div class="progressBox">
            <i class="fab fa-css3">CSS3</i>
            <div className="cssBox">
              <p>80%</p>
            </div>
          </div>
          <div class="progressBox">
            <i class="fab fa-js-square">JAVASCRIPT</i>
            <div className="jsBox">
              <p>60%</p>
            </div>
          </div>
          <div class="progressBox">
            <i class="fab fa-react">REACTJS</i>
            <div className="reactBox">
              <p>60%</p>
            </div>
          </div> */}
          <div className="skills">
            <h2>HTML</h2>
            <div className="progress-bar">
              <div className="html"><span>86%</span></div>
            </div>
            <h2>CSS</h2>
            <div className="progress-bar">
              <div className="css"><span>80%</span></div>
            </div>
            <h2>JavaScript</h2>
            <div className="progress-bar">
              <div className="javascript"><span>70%</span></div>
            </div>
            <h2>jQuery</h2>
            <div className="progress-bar">
              <div className="jquery"><span>60%</span></div>
            </div>
            <h2>ReactJS</h2>
            <div className="progress-bar">
              <div className="react"><span>65%</span></div>
            </div>
          </div>
        </div>
        <div className="sRightBox">
          <img
            src="	https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg"
            alt="skill"
          />
        </div>
      </div>
    </div>
  );
}
