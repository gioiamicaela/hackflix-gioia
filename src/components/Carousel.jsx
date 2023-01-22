import React from "react";
import { get } from "../utils/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import styles from "./Carousel.module.css";

function Carousel() {
  const [trendingMovies, setTrendingMovies] = React.useState([]);
  React.useEffect(() => {
    const searchUrl = "/trending/movie/day";
    get(searchUrl).then((data) => {
      setTrendingMovies(data.results.slice(0, 10));
    });
  }, []);

  return (
    <div className="container px-5 mt-3">
      <h2 className={styles.trendingMovieTitle}>TRENDING MOVIES</h2>
      <hr className="mb-4 text-white-50"></hr>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {trendingMovies.map((movie) => {
            return (
              <button
                key={movie.id}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={movie.id}
                className="active"
                aria-current="true"
                aria-label={`Slide ${movie.id}`}
              ></button>
            );
          })}
        </div>
        <div className="carousel-inner">
          {trendingMovies.map((movie) => {
            const imageURL = getMovieImg(movie.poster_path, 300);
            return (
              <div className="carousel-item" key={movie.id} id={movie.id}>
                <img
                  src={imageURL}
                  className="d-block w-100 rounded vh-75"
                  alt={movie.title}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{movie.title}</h5>
                  <p>{movie.overview}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
