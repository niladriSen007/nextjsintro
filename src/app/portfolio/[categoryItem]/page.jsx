import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { superstars } from "@/app/utils/superstars";
import { notFound } from "next/navigation";

const getData = (categoryItem) => {
  const data = superstars[categoryItem];

  if (data) return data;

  return notFound();
};

const Category = ({ params }) => {
  // console.log(params)
  const { categoryItem: year } = params;
  const data = getData(year);
  return (
    <div className={styles.container}>
      <h1>
        {year} - {year == 2020 ? "Current" : parseInt(year) + 10}
      </h1>

      <div className={styles.item_container}>
        {data.map((superstar) => (
          <div className={styles.item} key={superstar.id}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                width={160}
                height={160}
                src={superstar.img}
                alt=""
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{superstar.name}</h1>
              {/* <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem pariatur autem vitae id officiis laudantium doloremque at
            nemo molestiae.
          </p> */}
              <button className="button">See More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
