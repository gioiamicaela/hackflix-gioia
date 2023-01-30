import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
//import "./styles.css";
import { EffectCoverflow, Pagination } from "swiper";
import styles from "./SwiperComponent.module.css";
import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";

function SwiperComponent({ list }) {
  return (
    <>
      {list.length > 0 && (
        <div className="container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={8}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {list.map((movie) => {
              const imageURL = getMovieImg(movie.poster_path, 300);
              return (
                <>
                  <SwiperSlide className={styles.movieGrid}>
                    <Link to={"/" + movie.id}>
                      <img
                        src={imageURL}
                        alt={movie.title}
                        className={styles.movieImage}
                        width={230}
                        height={345}
                      />
                    </Link>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      )}
    </>
  );
}

export default SwiperComponent;
