import React from "react";
import styles from "../styles/BlogDetails.module.css";
import Link from "next/link";

export default function Footer(props) {
  let movies = props.movies;
  // console.log(movies);

  return (
    <div className={styles.outerDiv}>
      <div className={styles.imgDiv}>
        <img className={styles.img} src={movies.image.url} alt="Movie_image" />

        <div className={styles.relatedDiv}>
          <p className={styles.relatedTitle}>Related Movies</p>
          {movies.reference.map((link) => {
            return (
              <div className={styles.relatedLinks}>
                <Link key={link.title} href={"/blog/" + link.uid}>
                  {link.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.description}>
        <p>{movies.full_description}</p>
      </div>

      <div className={styles.author}>
        <p>Posted by {movies.author}</p>
      </div>
    </div>
  );
}
