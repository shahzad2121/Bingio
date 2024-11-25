import React, { useEffect, useState } from "react";
import Nav from "../partials/Nav";
import { Link, useNavigate } from "react-router-dom";
import Cards from "../partials/Cards";
import instance from "../Utils/Axios";
import InfiniteScroll from "react-infinite-scroll-component";

const TvShows = () => {
  const navigate = useNavigate();

  const [tv, setTv] = useState([]); // Always initialize as an empty array
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTrendingTv = async () => {
    try {
      const { data } = await instance.get(`/trending/tv/day?page=${page}`);
      if (data.results.length > 0) {
        setTv((prevState) => [...prevState, ...data.results]); // Append new results
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false); // Stop loading when no more data
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setHasMore(false);
    }
  };

  useEffect(() => {
    getTrendingTv();
  }, []);
  return  (
    <div className="w-full min-h-screen">
      <Nav />
      <div className="px-10">
        <div className="flex items-center gap-2">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-3xl cursor-pointer"
          ></i>
          <h2 className="font-bold text-4xl">Tv Shows</h2>
        </div>
        <InfiniteScroll
          dataLength={tv?.length || 0} // Safely handle undefined Tvs
          next={getTrendingTv}
          hasMore={hasMore}
        >
          <Cards data={tv} title="tv" />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default TvShows;
