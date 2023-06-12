import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "Niladri Sen Contact Page",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className={styles.contact_container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/rc.jpg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="20"
            rows="6"
          ></textarea>
          <button className="button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;