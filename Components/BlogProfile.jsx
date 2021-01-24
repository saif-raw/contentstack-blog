import React from "react";
import styles from "../styles/Blogs.module.css";
import Link from "next/link";

export default function Footer(props) {
  let movies = props.movies;
  console.log(movies);

  return (
    <>
      <p>{movies.author}</p>
      <img src={movies.image.url} alt="Movie_image" />
      <div>
        {movies.reference.map((link) => {
          return (
            <Link key={link.title} href={"/blog/" + link.uid}>
              {link.title}
            </Link>
          );
        })}
      </div>
      <p>{movies.full_description}</p>
      <p></p>
    </>
  );
}
