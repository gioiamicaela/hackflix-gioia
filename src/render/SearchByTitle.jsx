import React from "react";
import Nav from "../components/NavBar";
import MovieGrid from "../components/MovieGrid";
import { Search } from "../components/Search";
import { useSelector } from "react-redux";
import { useDebounce } from "../hooks/useDebounce";
import ScrollToTop from "react-scroll-to-top";

function SearchByTitle() {
  const searchText = useSelector((state) => {
    return state.text.text;
  });
  const debouncedSearch = useDebounce(searchText, 300);
  return (
    <div>
      <Nav />
      <Search />
      <MovieGrid key={debouncedSearch} searchText={debouncedSearch} />
      <ScrollToTop
        smooth
        color={"black"}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      />
    </div>
  );
}

export default SearchByTitle;
