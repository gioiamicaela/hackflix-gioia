import React from "react";
import Nav from "../components/NavBar";
import { useSelector } from "react-redux";
import { useDebounce } from "../hooks/useDebounce";
import Carousel from "../components/CarouselComponent";
import MovieCard from "../components/MovieCard";
import styles from "../components/MovieGrid.module.css";
import action from "../components/action.json";

function LandingPage() {
  const searchText = useSelector((state) => {
    return state.value;
  });
  const debouncedSearch = useDebounce(searchText, 300);

  return (
    <div>
      <Nav />
      <Carousel />
      <ul className={styles.movieGrid}>
        {action.map((movie) => {
          return (
            <li style={{ listStyle: "none" }} className={styles.movieCard}>
              <MovieCard key={movie.id} movie={movie} />;
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LandingPage;
