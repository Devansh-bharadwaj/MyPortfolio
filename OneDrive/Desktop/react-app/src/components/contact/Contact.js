import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Love To Hear From You</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112064.38490368047!2d77.22106879999998!3d28.629401599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1673519560174!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className={styles.form}>
        <form
          action="https://formspree.io/f/xjvdvqey"
          method="post"
          className={styles.contactForm}
        >
          <input
            type="text"
            placeholder="USERNAME"
            name="username"
            value={isAuthenticated ? user.name : ""}
            required
            autoComplete="off"
          />
          <input
            type="email"
            placeholder="EMAIL"
            value={isAuthenticated ? user.email : ""}
            name="email"
            required
            autoComplete="off"
          />
          <textarea
            style={{ padding: "8px" }}
            name="Message"
            placeholder="Enter your message.."
            autoComplete="off"
            required
            cols="20"
            rows="10"
          ></textarea>
          <button type="submit" className={styles.sendBtn}>
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
