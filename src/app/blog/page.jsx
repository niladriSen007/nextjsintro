import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../utils/blogData";
const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      {blogData.map((item) => (
        <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>
              {item.title}
            </h1>
            <p className={styles.desc}>
              {item.desc}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
