import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Movies from "./Components/Movies";
import TvShows from "./Components/TvShows";
import TvDetails from "./Components/TvDetails";
import MovieDetails from "./Components/MovieDetails";
import Trailer from "./partials/Trailer";

const App = () => {
  return (
    <>
    <div className="bg-black">
      <div className="bg-black max-w-screen-2xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/details/:id" element={<MovieDetails />} >
          <Route path="/movie/details/:id/trailer" element={<Trailer />}/>
          </Route>
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/tv/details/:id" element={<TvDetails />} />
        </Routes>
      </div></div>
    </>
  );
};

export default App;
