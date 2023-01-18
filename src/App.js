import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./render/LandingPage";
import MovieDetails from "./render/MovieDetails";
import SearchByTitle from "./render/SearchByTitle";
import SearchByRating from "./render/SearchByRating";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/search-title" element={<SearchByTitle />} />
      <Route path="/search-rating" element={<SearchByRating />} />
      <Route path="/:movieId" element={<MovieDetails />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
