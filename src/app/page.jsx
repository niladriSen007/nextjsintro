import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.home_text_content_container}>
        <h2 className={styles.home_text_content_title}>
          Unleash The <span>Beast</span> Inside You 🥷
        </h2>
        <p className={styles.home_text_content_desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          quidem voluptatibus, velit ea minus ex fuga!
        </p>
        <div className={styles.container}>
        <button className={styles.button}>See More</button>
        </div>
      </div>
      <div className={styles.image_container}>
        <Image
          className={styles.image}
          width={400}
          height={400}
          alt="Roman"
          src={"/roman.jpg"}
        />
      </div>
    </div>
  );
}
