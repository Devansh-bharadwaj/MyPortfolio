import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="contNum">Contact no. 9149117878</div>
      <div className="cHead">We'd love to hear from you</div>
      <div className="cMain">
        <div className="leftBox mt-5">
          <div className="linked">
            <p><b>Linked : </b>I post my project updates on linkedin, <a href="https://www.linkedin.com/in/devansh-bharadwaj-b730221a2/">Follow me for next project updates</a></p>
          </div>
          <div className="linked mt-3">
            <p><b>Github : </b>Shoot your pull request to fix bugs / for new updates, <a href="https://www.linkedin.com/in/devansh-bharadwaj-b730221a2/">Repo Link</a></p>
          </div>
          <div className="linked mt-3">
            <p><b>Mail : </b>Always on experiment mood, feel free to contact <a href="mailto:devanshbharadwaj1@gmail.com">Mail Me</a></p>
          </div>
        </div>
        <div className="rightBox">
          <img
            src="https://cdn.pixabay.com/photo/2015/11/03/08/58/meeting-1019875_960_720.jpg"
            alt="contact"
          />
        </div>
      </div>
    </div>
  );
}
