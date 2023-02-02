import React from "react";
import styles from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";

function MovieDetails() {
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
      {/* className sería .detailsContainerMax  */}
      <div className="container  px-5">
        <div className="row">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            {movie && (
              <div
                className="w-100 d-flex flex-column justify-content-end p-4 mt-5"
                style={{
                  height: "75vh",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  padding: "3rem",
                  marginTop: "1.5rem",
                  borderRadius: "1.5rem",
                  backgroundPosition: "center",
                  maxWidth: "500px",
                  background: `linear-gradient(transparent 20%, rgba(25, 27, 31, 0.467) 50%,
              rgba(25, 27, 31, 0.933)), url(${imageURL})`,
                }}
              >
                <h2 className="text-white fw-bold text-uppercase mb-0">
                  {movie.title}
                </h2>
                <hr className="text-white" style={{ height: "2px" }}></hr>
                <div className="row">
                  <div className="col-md-6">
                    <p className="fw-bold text-white mb-0">OVERVIEW</p>
                    <p className="fw-light text-white">{movie.overview}</p>
                  </div>

                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-12">
                        <p className="fw-bold text-white mb-0 mt-2">GENRES</p>
                        {movie.genres.map((item, index) => {
                          return (
                            <p
                              className="fw-light text-white d-inline me-2"
                              key={index}
                            >
                              {item.name}
                            </p>
                          );
                        })}
                      </div>
                      <div className="col-sm-6">
                        <p className="fw-bold text-white mb-0 mt-2">
                          RELEASE DATE
                        </p>
                        <p className="fw-light text-white">
                          {movie.release_date}
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <p className="fw-bold text-white mb-0 mt-2">RATING</p>
                        <p className="fw-light text-white">
                          {movie.vote_average}/10
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {isLoading && <Spinner />}

        {/* {movie && (
          <div className={styles.detailsContainer}>
            <img
              src={imageURL}
              alt=""
              className={`${styles.col} ${styles.movieImage} `}
            />
            <div
              className={`${styles.col} ${styles.movieDetails} `}
             
            >
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
        )} */}
      </div>
    </div>
  );
}

export default MovieDetails;
