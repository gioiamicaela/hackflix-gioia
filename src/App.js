import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./render/LandingPage";
import MovieDetails from "./render/MovieDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/:movieId" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
