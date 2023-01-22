import React from "react";
import Nav from "../components/NavBar";
import MovieGrid from "../components/MovieGrid";
import { Search } from "../components/Search";
import { useSelector } from "react-redux";
import { useDebounce } from "../hooks/useDebounce";
import Carousel from "../components/Carousel";

function LandingPage() {
  const searchText = useSelector((state) => {
    return state.value;
  });
  const debouncedSearch = useDebounce(searchText, 300);
  return (
    <div>
      <Nav />
      {/* <Search />
      <MovieGrid key={debouncedSearch} searchText={debouncedSearch} /> */}
      <Carousel />
    </div>
  );
}

export default LandingPage;
