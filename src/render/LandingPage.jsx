import React from "react";
import Nav from "../components/NavBar";
import { useSelector } from "react-redux";
import { useDebounce } from "../hooks/useDebounce";
import Carousel from "../components/CarouselComponent";
import MovieCard from "../components/MovieCard";
import action from "../components/action.json";
import adventure from "../components/adventure.json";
import animation from "../components/animation.json";
import comedy from "../components/comedy.json";
import drama from "../components/drama.json";
import horror from "../components/horror.json";
import styles from "./LandingPage.module.css";

function LandingPage() {
  const searchText = useSelector((state) => {
    return state.value;
  });
  const debouncedSearch = useDebounce(searchText, 300);

  return (
    <div>
      <Nav />
      <Carousel />
      <div className="container mt-5">
        <h2 className={styles.genre}>ACTION</h2>
        <hr className="mb-4 text-white-50"></hr>
        <ul className={styles.movieGrid}>
          {action.map((movie) => {
            return (
              <li style={{ listStyle: "none" }} className={styles.movieCard}>
                <MovieCard key={movie.id} movie={movie} />;
              </li>
            );
          })}
        </ul>
        <h2 className={styles.genre}>ADVENTURE</h2>
        <hr className="mb-4 text-white-50"></hr>
        <ul className={styles.movieGrid}>
          {adventure.map((movie) => {
            return (
              <li style={{ listStyle: "none" }} className={styles.movieCard}>
                <MovieCard key={movie.id} movie={movie} />;
              </li>
            );
          })}
        </ul>
        <h2 className={styles.genre}>ANIMATION</h2>
        <hr className="mb-4 text-white-50"></hr>
        <ul className={styles.movieGrid}>
          {animation.map((movie) => {
            return (
              <li style={{ listStyle: "none" }} className={styles.movieCard}>
                <MovieCard key={movie.id} movie={movie} />;
              </li>
            );
          })}
        </ul>
        <h2 className={styles.genre}>COMEDY</h2>
        <hr className="mb-4 text-white-50"></hr>
        <ul className={styles.movieGrid}>
          {comedy.map((movie) => {
            return (
              <li style={{ listStyle: "none" }} className={styles.movieCard}>
                <MovieCard key={movie.id} movie={movie} />;
              </li>
            );
          })}
        </ul>
        <h2 className={styles.genre}>DRAMA</h2>
        <hr className="mb-4 text-white-50"></hr>
        <ul className={styles.movieGrid}>
          {drama.map((movie) => {
            return (
              <li style={{ listStyle: "none" }} className={styles.movieCard}>
                <MovieCard key={movie.id} movie={movie} />;
              </li>
            );
          })}
        </ul>
        <h2 className={styles.genre}>HORROR</h2>
        <hr className="mb-4 text-white-50"></hr>
        <ul className={styles.movieGrid}>
          {horror.map((movie) => {
            return (
              <li style={{ listStyle: "none" }} className={styles.movieCard}>
                <MovieCard key={movie.id} movie={movie} />;
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default LandingPage;
