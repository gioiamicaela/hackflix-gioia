import React from "react";
import { get } from "../utils/httpClient";
import MovieCard from "./MovieCard";
import styles from "./MovieGrid.module.css";
import { Spinner } from "./Spinner";
import NoMatch from "./NoMatch";
import InfiniteScroll from "react-infinite-scroll-component";

export default function MovieGrid({ searchText }) {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    const searchUrl = searchText
      ? "/search/movie?query=" + searchText + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [searchText, page]);

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
                    <MovieCard key={movie.id} movie={movie} />;
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
