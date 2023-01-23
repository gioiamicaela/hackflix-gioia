import React from "react";
import { get } from "../utils/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import styles from "./CarouselComponent.module.css";
import Carousel from "react-bootstrap/Carousel";

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
    <div className="container px-5 mt-3">
      <h2 className={styles.trendingMovieTitle}>TRENDING MOVIES</h2>
      <hr className="mb-4 text-white-50"></hr>
      {trendingMovies.length > 0 && (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={getMovieImg(trendingMovies[0].poster_path, 300)}
              alt="First slide"
              style={{
                height: "auto",
                borderRadius: "1.5rem",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(.5)",
              }}
            />
            <Carousel.Caption>
              <h3>{trendingMovies[0].title}</h3>
              <p>{trendingMovies[0].overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={getMovieImg(trendingMovies[1].poster_path, 300)}
              alt="First slide"
              style={{
                height: "auto",
                borderRadius: "1.5rem",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(.5)",
              }}
            />
            <Carousel.Caption>
              <h3>{trendingMovies[1].title}</h3>
              <p>{trendingMovies[1].overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={getMovieImg(trendingMovies[2].poster_path, 300)}
              alt="First slide"
              style={{
                height: "auto",
                borderRadius: "1.5rem",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(.5)",
              }}
            />
            <Carousel.Caption>
              <h3>{trendingMovies[2].title}</h3>
              <p>{trendingMovies[2].overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={getMovieImg(trendingMovies[3].poster_path, 300)}
              alt="First slide"
              style={{
                height: "auto",
                borderRadius: "1.5rem",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(.5)",
              }}
            />
            <Carousel.Caption>
              <h3>{trendingMovies[3].title}</h3>
              <p>{trendingMovies[3].overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={getMovieImg(trendingMovies[4].poster_path, 300)}
              alt="First slide"
              style={{
                height: "auto",
                borderRadius: "1.5rem",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(.5)",
              }}
            />
            <Carousel.Caption>
              <h3>{trendingMovies[4].title}</h3>
              <p>{trendingMovies[4].overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={getMovieImg(trendingMovies[5].poster_path, 300)}
              alt="First slide"
              style={{
                height: "auto",
                borderRadius: "1.5rem",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(.5)",
              }}
            />
            <Carousel.Caption>
              <h3>{trendingMovies[5].title}</h3>
              <p>{trendingMovies[5].overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={getMovieImg(trendingMovies[6].poster_path, 300)}
              alt="First slide"
              style={{
                height: "auto",
                borderRadius: "1.5rem",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(.5)",
              }}
            />
            <Carousel.Caption>
              <h3>{trendingMovies[6].title}</h3>
              <p>{trendingMovies[6].overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={getMovieImg(trendingMovies[7].poster_path, 300)}
              alt="First slide"
              style={{
                height: "auto",
                borderRadius: "1.5rem",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(.5)",
              }}
            />
            <Carousel.Caption>
              <h3>{trendingMovies[7].title}</h3>
              <p>{trendingMovies[7].overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={getMovieImg(trendingMovies[8].poster_path, 300)}
              alt="First slide"
              style={{
                height: "auto",
                borderRadius: "1.5rem",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(.5)",
              }}
            />
            <Carousel.Caption>
              <h3>{trendingMovies[8].title}</h3>
              <p>{trendingMovies[8].overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 vh-75"
              src={getMovieImg(trendingMovies[9].poster_path, 300)}
              alt="First slide"
              style={{
                height: "auto",
                borderRadius: "1.5rem",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(.5)",
              }}
            />
            <Carousel.Caption>
              <h3>{trendingMovies[9].title}</h3>
              <p>{trendingMovies[9].overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}
    </div>
  );
}

export default CarouselComponent;
