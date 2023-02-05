import React from "react";
import { get } from "../utils/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import styles from "./CarouselComponent.module.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function CarouselComponent() {
  const [trendingMovies, setTrendingMovies] = React.useState([]);
  React.useEffect(() => {
    const searchUrl = "/trending/movie/day";
    get(searchUrl).then((data) => {
      setTrendingMovies(data.results.slice(0, 10));
    });
  }, []);

  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container px-5 mt-5">
      <h2 className={styles.trendingMovieTitle}>TRENDING MOVIES</h2>
      <hr className="mb-4 text-white-50"></hr>
      {trendingMovies.length > 0 && (
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className={styles.carouselSize}
        >
          {trendingMovies.map((movie, index) => {
            return (
              <Carousel.Item key={index}>
                <Link to={"/" + movie.id}>
                  <img
                    className="d-block w-100"
                    src={getMovieImg(movie.poster_path, 500)}
                    alt={movie.title}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      height: "75vh",
                      borderRadius: "1.5rem",
                      filter: "brightness(.5)",
                      overflow: "hidden",
                      opacity: "0.75",
                    }}
                  />
                </Link>
                <Carousel.Caption>
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
    </div>
  );
}

export default CarouselComponent;
