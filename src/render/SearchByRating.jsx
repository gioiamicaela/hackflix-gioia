import React from "react";
import Nav from "../components/NavBar";
import MovieGrid from "../components/MovieGrid";
import Rating from "../components/Rating";
import { useSelector } from "react-redux";
import { useDebounce } from "../hooks/useDebounce";

function SearchByRating() {
  const searchText = useSelector((state) => {
    return state.value;
  });
  const debouncedSearch = useDebounce(searchText, 300);
  const [rating, setRating] = React.useState(null);

  return (
    <div>
      <Nav />
      <Rating setRating={setRating} />
      <MovieGrid
        key={debouncedSearch}
        searchText={debouncedSearch}
        rating={rating}
      />
    </div>
  );
}

export default SearchByRating;
