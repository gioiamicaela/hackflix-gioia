import React from "react";
import Nav from "../components/NavBar";
import Carousel from "../components/CarouselComponent";
import styles from "./LandingPage.module.css";
import ScrollToTop from "react-scroll-to-top";
import Swiper from "../components/SwiperComponent";
import { getGenre } from "../utils/httpClient";

function LandingPage() {
  const [actionList, setActionList] = React.useState([]);
  const [dramaList, setDramaList] = React.useState([]);
  const [comedyList, setComedyList] = React.useState([]);
  const [horrorList, setHorrorList] = React.useState([]);
  const [adventureList, setAdventureList] = React.useState([]);
  const [animationList, setAnimationList] = React.useState([]);

  React.useEffect(() => {
    getGenre("/discover/movie?&with_genres=28").then((data) => {
      setActionList(data.results);
    });
    getGenre("/discover/movie?&with_genres=12").then((data) => {
      setAdventureList(data.results);
    });
    getGenre("/discover/movie?&with_genres=16").then((data) => {
      setAnimationList(data.results);
    });
    getGenre("/discover/movie?&with_genres=35").then((data) => {
      setComedyList(data.results);
    });
    getGenre("/discover/movie?&with_genres=18").then((data) => {
      setDramaList(data.results);
    });
    getGenre("/discover/movie?&with_genres=27").then((data) => {
      setHorrorList(data.results);
    });
  }, []);
  return (
    <div>
      <Nav />
      <Carousel />

      <div className="container  mt-5 pb-5">
        <h2 className={styles.genre}>ACTION</h2>
        <hr className="mb-4 text-white-50"></hr>
        <Swiper list={actionList}></Swiper>
        <h2 className={styles.genre}>ADVENTURE</h2>
        <hr className="mb-4 text-white-50"></hr>
        <Swiper list={adventureList}></Swiper>
        <h2 className={styles.genre}>ANIMATION</h2>
        <hr className="mb-4 text-white-50"></hr>
        <Swiper list={animationList}></Swiper>
        <h2 className={styles.genre}>COMEDY</h2>
        <hr className="mb-4 text-white-50"></hr>
        <Swiper list={comedyList}></Swiper>
        <h2 className={styles.genre}>DRAMA</h2>
        <hr className="mb-4 text-white-50"></hr>
        <Swiper list={dramaList}></Swiper>
        <h2 className={styles.genre}>HORROR</h2>
        <hr className="mb-4 text-white-50"></hr>
        <Swiper list={horrorList}></Swiper>
        <ScrollToTop
          smooth
          color={"black"}
          style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        />
      </div>
    </div>
  );
}

export default LandingPage;
