import React from "react";
import ReactStars from "react-rating-stars-component";
import styles from "./Rating.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setRating, clearRating } from "../redux/ratingSlice";

export default function Rating({ setRating }) {
  return (
    <div className="container mt-3">
      <div className="row align-items-center">
        <div className="col-12 text-center">
          <p
            className="movieRatingTitle"
            style={{
              color: "rgba(255,255,255,.5)",
              fontWeight: "300 !important",
              size: "1.1rem",
              margin: "0",
            }}
          >
            Filter by raiting
          </p>
          <span></span>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center text-center">
          <ReactStars
            classNames={styles.star}
            count={5}
            onChange={(starsSelected) => setRating(starsSelected)}
            size={50}
            emptyIcon={<i className="fas fa-star"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div>
      </div>
      <div className="row">
        <h2 className={styles.movieTitle}>MOVIES</h2>
        <hr className="mb-4 text-white-50"></hr>
      </div>
    </div>
  );
}
