import React from "react";
import { get } from "../utils/httpClient";
import MovieCard from "./MovieCard";
import styles from "./MovieGrid.module.css";
import { Spinner } from "./Spinner";
import NoMatch from "./NoMatch";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";
import { addMovie } from "../redux/movieSlice";
import { clearSearchText } from "../redux/textSlice";

export default function MovieGridForRaiting({ searchText, rating }) {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);
  React.useEffect(() => {
    const api_key = process.env.REACT_APP_KEY;
    console.log("rating", rating);
    setIsLoading(true);
    if (rating >= 1) {
      const min = (rating - 1) * 2;
      const max = rating * 2;
      const searchUrl =
        `/discover/movie?${api_key}&vote_average.gte=${min}&vote_average.lte=${max}&page=` +
        page;
      get(searchUrl).then((data) => {
        console.log("results", data.results);
        setMovies((prevMovies) => prevMovies.concat(data.results));
        // const moviesFiltered = movies.filter(
        //   (movie) => movie.vote_average !== max
        // );
        // setMovies(moviesFiltered);
        setHasMore(data.page < data.total_pages);
        setIsLoading(false);
      });
    }
  }, [page, rating]);

  React.useEffect(() => {
    console.log("movies", movies);
  }, [movies]);

  if (!isLoading && movies.length === 0) {
    return <NoMatch />;
  }

  return (
    <>
      <div className="container px-0 minHeightContainer">
        {movies.length > 0 && (
          <InfiniteScroll
            dataLength={movies.length}
            hasMore={hasMore}
            next={() => setPage((prevPage) => prevPage + 1)}
            loader={<Spinner />}
          >
            <ul className={styles.movieGrid}>
              {movies.map((movie, index) => {
                return (
                  <li
                    style={{ listStyle: "none" }}
                    className={styles.movieCard}
                    key={index}
                  >
                    <MovieCard key={index} movie={movie} />;
                  </li>
                );
              })}
            </ul>
          </InfiniteScroll>
        )}
      </div>
    </>
  );
}
