import React from "react";
import ReactStars from "react-rating-stars-component";

export default function Rating({ setRating }) {
  React.useEffect(() => {
    console.log("El componente se acaba de montar (primer render).");
  }, []);

  return (
    <div className="row movieRating">
      <div className="col-4 ">
        <h3 className="movieRatingTitle">Filter by raiting</h3>
      </div>
      <div className="col-4 d-flex justify-content-center">
        <ReactStars
          count={5}
          onChange={(starsSelected) => setRating(starsSelected)}
          size={24}
          activeColor="#ffd700"
        />
      </div>
      <div className="col-4 d-flex flex-start">
        <h3 className="movieRatingTitle">& more</h3>
      </div>
    </div>
  );
}
