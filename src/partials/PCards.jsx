import React, { useEffect, useState } from "react";
import instance from "../Utils/Axios";
import InfiniteScroll from "react-infinite-scroll-component";

const PCards = () => {
  const [movies, setMovies] = useState([]); // Always initialize as an empty array
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTrendingMovie = async () => {
    try {
      const { data } = await instance.get(
        `watch/providers/regions?page=${page}`
      );
      if (data.results.length > 0) {
        setMovies((prevState) => [...prevState, ...data.results]); // Append new results
        setPage((prevPage) => prevPage + 1);
        console.log(movies);
      } else {
        setHasMore(false); // Stop loading when no more data
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setHasMore(false);
    }
  };

  useEffect(() => {
    getTrendingMovie();
  }, []);

  return (
    <div className="py-10">
      <InfiniteScroll
        dataLength={movies?.length || 0} // Safely handle undefined movies
        next={getTrendingMovie}
        hasMore={hasMore}
      >
        <div className="flex justify-between items-center flex-wrap">
          {movies.map((m, i) => (
            <div
              key={i}
              className="mb-5 w-[23vw] h-72 p-2 hover:bg-zinc-800 bg-zinc-900 duration-200 rounded-md"
            >
              <img
                className="w-full object-cover object-center rounded-md"
                src={`https://image.tmdb.org/t/p/original/${
                  m.backdrop_path || m.profile_path
                }`}
                alt="Movie Poster"
              />
              <div className="w-full py-5 flex flex-col justify-end">
                <h2 className="font-semibold text-xl leading-5"></h2>
                <div className="flex items-center gap-2">
                  <p className="font-light text-base font-mono">
                    <i className="ri-star-s-fill"></i>
                    <span className="text-[#3BE477] text-sm">
                      {m.vote_average}
                    </span>
                  </p>
                  <h5>|</h5>
                  <h5 className="font-normal text-sm">
                    {m.media_type?.toUpperCase()}
                  </h5>
                  <h5>|</h5>
                  <h5>{m.release_date?.split("-")[0]}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default PCards;
