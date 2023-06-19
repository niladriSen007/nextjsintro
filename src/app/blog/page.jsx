import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../utils/blogData";

async function getData() {
  //static data fetching - means data will never change
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts',  {cache: 'force-cache'})

  //data updates after each interval
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 10 } })

  //data updates each and every moment
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              // src={"item.img"}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
