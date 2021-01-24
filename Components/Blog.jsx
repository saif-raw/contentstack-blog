import React from "react";
import styles from "../styles/Blogs.module.css";
import Link from "next/link";

export default function Footer(props) {
  let blogs = props.blogs[0];
  // console.log(props.blogs);

  return (
    <>
      {[blogs][0].map((link) => {
        return (
          <Link href={"/blog/" + link.uid}>
            <div className={styles.cardWrap}>
              <div className={`${styles.cardLeft} ${styles.card}`}>
                <p className={styles.header1}>{link.title}</p>

                <div className={styles.title}>
                  <p className={styles.header2}>{link.short_description}</p>
                  <p className={styles.spanClass}>{link.author}</p>
                  {/* <img
                  className={styles.image}
                  src={link.image.url}
                  alt="Blog_images"
                /> */}
                </div>
              </div>

              <div class={`${styles.card} ${styles.cardRight}`}>
                <div class={styles.eye}></div>
                <div class={styles.number}>
                  <img
                    className={styles.image}
                    src={link.image.url}
                    alt="Blog_images"
                  />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
