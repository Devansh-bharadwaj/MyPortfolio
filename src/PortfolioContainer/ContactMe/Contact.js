import React from "react";
import "./Contact.css";
// import img1 from './contactme1.jpg';
// import img2 from './contactmedark'

export default function Contact() {
  return (
    <div className="container my-5">
      <div className="contNum">📞 9149117878</div>
      <div className="cHead">Always happy to hear from you🙂</div>
      <div className="cMain">
        <div className="leftBox mt-5">
          <div className="linked">
            <p><b>Linked : </b>I post my project updates on linkedin, <a style={{textDecoration: "none"}} href="https://www.linkedin.com/in/devansh-bharadwaj-b730221a2/">Follow me for next project updates</a></p>
          </div>
          <div className="linked mt-3">
            <p><b>Github : </b>Shoot your pull request to fix bugs / for new updates, <a style={{textDecoration: "none"}} href="https://github.com/Devansh-bharadwaj">Repo Link</a></p>
          </div>
          <div className="linked mt-3">
            <p><b>Mail : </b>Always on experiment mood, feel free to contact <a style={{textDecoration: "none"}} href="mailto:devanshbharadwaj1@gmail.com">Mail Me</a></p>
          </div>
        </div>
        <div className="rightBox">
          {/* <img
            src={img}
            alt="contact"
          /> */}
        </div>
      </div>
    </div>
  );
}
