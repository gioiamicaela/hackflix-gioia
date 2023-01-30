import React from "react";
import styles from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";

function MovieDisplay() {
  const { movieId } = useParams();
  const [movie, setMovie] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    get(`/movie/${movieId}`).then((data) => {
      setIsLoading(false);
      setMovie(data);
    });
  }, [movieId]);

  let imageURL = "";

  if (movie) {
    imageURL = getMovieImg(movie.poster_path, 500);
  }

  return (
    <div>
      <NavBar />
      <div className={styles.detailsContainerMax}>
        {isLoading && <Spinner />}
        {movie && (
          <div className={styles.detailsContainer}>
            <img
              src={imageURL}
              alt=""
              className={`${styles.col} ${styles.movieImage} `}
            />
            <div className={`${styles.col} ${styles.movieDetails} `}>
              <p className={styles.firstItem}>
                <strong>Title:</strong> {movie.title}
              </p>
              <p>
                <strong>Genres:</strong>{" "}
                {movie.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p>
                <strong>Description:</strong> {movie.overview}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDisplay;
