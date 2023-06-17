import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import {notFound} from "next/navigation"


async function getData(id) {
  //static data fetching - means data will never change
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts',  {cache: 'force-cache'})

  //data updates after each interval
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 10 } })

  //data updates each and every moment
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");
    //or
    notFound()
  }

  return res.json();
}

const Post = async({params}) => {

  const data = await getData(params.id)
  const {title,body} = data;


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          {/* <h1 className={styles.title}>{data.title}</h1> */}
          <h1 className={styles.title}>
            {title}
          </h1>
          <p className={styles.desc}>
            {/* {data.desc} */}
           {body}
          </p>
          <div className={styles.author}>
            <Image
              // src={data.img}
              src={"/undertaker.jpg"}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            {/* <span className={styles.username}>{data.username}</span> */}
            <span className={styles.username}>UnderTaker</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          {/* <Image src={data.img} alt="" fill={true} className={styles.image} /> */}
          <Image
            src={"/undertaker.jpg"}
            alt=""
            width={600}
            height={340}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        {/* <p className={styles.text}>{data.content}</p> */}
        <p className={styles.text}>
         {body}
        </p>
      </div>
    </div>
  );
};

export default Post;
