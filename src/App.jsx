import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Movies from "./Components/Movies";
import Popular from "./Components/Popular";
import TvShows from "./Components/TvShows";

const App = () => {
  return (
    <>
      <div className="bg-black max-w-screen-2xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          {/* <Route path="/popular" element={<Popular />} /> */}
          <Route path="/tvshows" element={<TvShows />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
