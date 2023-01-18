import React from "react";
import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";

function CardMovie({ movie }) {
  const imageURL = getMovieImg(movie.poster_path, 300);
  return (
    <Link to={"/" + movie.id}>
      <img
        src={imageURL}
        alt={movie.title}
        className={styles.movieImage}
        width={230}
        height={345}
      />
    </Link>
  );
}

export default CardMovie;
