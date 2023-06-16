import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Post = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          {/* <h1 className={styles.title}>{data.title}</h1> */}
          <h1 className={styles.title}>
            Undertaker has announced his retirement
          </h1>
          <p className={styles.desc}>
            {/* {data.desc} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic autem
            explicabo soluta nemo aliquid ipsa ut doloribus aperiam minima.
            Aspernatur blanditiis maxime sed voluptas, maiores voluptatibus! Nam
            veniam, accusamus, pariatur quas quia officia molestiae distinctio
            nisi reiciendis quos mollitia tempora!
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, magni
          fugit repellendus voluptatibus eos iure, mollitia itaque minus ad
          explicabo iste molestias porro tempore! Tempora beatae mollitia,
          veniam reprehenderit dignissimos ab fuga, at optio nihil autem numquam
          officia minima esse iste voluptatem est illo quos corrupti doloribus!
          Minus itaque debitis hic neque autem vitae suscipit temporibus
          exercitationem, ducimus doloribus alias asperiores numquam sint eos
          <br />
          natus repellat. Iure architecto quas ipsa natus ipsam exercitationem
          magni inventore nostrum est laudantium neque numquam magnam explicabo
          aspernatur, quisquam libero quia velit. Culpa, tempora error! Pariatur
          quidem nostrum quod non voluptas recusandae nam maxime dolor<br /><br />
          consectetur ullam minus delectus, distinctio praesentium dignissimos
         ores
          repellendus soluta rerum ullam dolore asperiores consectetur explicabo
          aut consequuntur! Explicabo aperiam commodi aliquid repellendus qui et
          dolores quod odit? Doloribus nobis, perspiciatis similique magni
          temporibus, cumque doloremque beatae aspernatur repellat odit
     
       
        
          ipsa quam laudantium nam atque architecto provident. Asperiores.
        </p>
      </div>
    </div>
  );
};

export default Post;
