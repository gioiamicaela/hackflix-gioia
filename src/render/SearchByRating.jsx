import React from "react";
import Nav from "../components/NavBar";
import Rating from "../components/Rating";
import ScrollToTop from "react-scroll-to-top";
import MovieGridForRating from "../components/MovieGridForRating";

function SearchByRating() {
  const [rating, setRating] = React.useState(null);

  return (
    <div>
      <Nav />
      <Rating setRating={setRating} />
      <MovieGridForRating key={rating} rating={rating} />
      <ScrollToTop
        smooth
        color={"black"}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      />
    </div>
  );
}

export default SearchByRating;
