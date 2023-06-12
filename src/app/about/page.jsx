import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div>
      <div className={styles.image_container}>
        <Image src={"/john.jpg"} width={1366} height={600} alt="cover" />
      </div>
      <div className={styles.text_content_container}>
        <div className={styles.text_content_container_one}>
          <h2>What is WWE ?</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
            reiciendis. Ut laboriosam voluptatem expedita tempore consequatur
            quis facere illo quod fuga voluptatum explicabo quibusdam veniam,<br />
            facilis quaerat, commodi molestias nulla praesentium recusandae
            corporis hic odio! Repellat at excepturi quaerat consectetur sequi<br />
            est quisquam obcaecati nobis fuga soluta incidunt nesciunt aliquid
            corporis similique voluptatibus illum nisi, saepe esse veritatis
            eveniet ipsum.
          </p>
        </div>
        <div className={styles.text_content_container_one}>
          <h2>What WWE do?</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
            reiciendis. Ut laboriosam voluptatem expedita tempore consequatur<br />
            quis facere illo quod fuga voluptatum explicabo quibusdam veniam,
            facilis quaerat, commodi molestias nulla praesentium recusandae
            corporis hic odio! Repellat at excepturi quaerat consectetur sequi<br />
            <button className="button"><Link href={"/contact"}>Contact</Link></button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
