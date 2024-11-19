import React, { useEffect, useState } from "react";
import instance from "../Utils/Axios";

const Cards = () => {
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);

  const getTrendingMovie = async () => {
    try {
      const { data } = await instance.get("/trending/movie/week");
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getTrendingTv = async () => {
    try {
      const { data } = await instance.get("/trending/tv/week");
      setTv(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(tv, movies);
  

  useEffect(() => {
    getTrendingMovie();
    getTrendingTv();
  }, [1, 2]);

  return (
    <div className="flex">
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
      <div>
        {tv.map((t, i) => (
          <div key={i}>
            <h2>{t.name}</h2>
            <h2>{t.overview}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
