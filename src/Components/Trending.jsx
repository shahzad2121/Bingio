import React, { useEffect, useState } from "react";
import Nav from "../partials/Nav";
import { Link, useNavigate } from "react-router-dom";
import Cards from "../partials/Cards";
import instance from "../Utils/Axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [shows, setShows] = useState([]); // Always initialize as an empty array
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTrendingShows = async () => {
    try {
      const { data } = await instance.get(`/trending/all/week?page=${page}`);
      if (data.results.length > 0) {
        setShows((prevState) => [...prevState, ...data.results]); // Append new results
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
    getTrendingShows();
  }, []);
  return (
    <div className="w-full min-h-screen">
      <Nav />
      <div className="px-10">
    <div className="w-full min-h-screen">
      <Nav />
      <div className="px-10">
        <div className="flex items-center gap-2">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-3xl cursor-pointer"
          ></i>
          <h2 className="font-bold text-4xl">Trending Shows</h2>
        </div>

        <InfiniteScroll
          dataLength={shows?.length || 0} // Safely handle undefined Showss
          next={getTrendingShows}
          hasMore={hasMore}
        >
          <Cards data={shows} title="trending" />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Trending;
