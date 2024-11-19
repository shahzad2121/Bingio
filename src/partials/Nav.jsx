import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../Utils/Axios";
import no_img from "../../public/no_img.webp";
import { CiSearch } from "react-icons/ci";
import { IconContext } from "react-icons";

const Nav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  const getSearches = async () => {
    try {
      const { data } = await instance.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log('Error:""', error);
    }
  };
  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <nav className="w-full bg-transparent flex items-center justify-between py-4 px-10">
      <div className="flex items-center gap-20">
        <div>
          <h4 className="text-xl font-semibold rounded-md p-1 font-mono">
            Bingio
          </h4>
        </div>
        <div className="flex gap-12 text-base items-center">
          <Link className="flex justify-center gap-1 hover:text-[#ba90f4] hover:font-normal duration-200">
            Home
          </Link>
          <Link className="flex justify-center gap-1 hover:text-[#ba90f4] hover:font-normal duration-200">
            Trending
          </Link>
          <Link className="flex justify-center gap-1 hover:text-[#ba90f4] hover:font-normal duration-200">
            Movies
          </Link>
          <Link className="flex justify-center gap-1 hover:text-[#ba90f4] hover:font-normal duration-200">
            Popular
          </Link>
          <Link className="flex justify-center gap-1 hover:text-[#ba90f4] hover:font-normal duration-200">
            Tv Shows
          </Link>
        </div>
      </div>
      <div className="relative">
        <IconContext.Provider value={{ className: "react-icons" }}>
          <div className="w-80 backdrop-blur-sm bg-white/20 overflow-hidden rounded-full flex items-center py-[10px] px-5">
            {/* <i className="ri-search-2-line text-2xl font-thin text-zinc-300"></i> */}
            <CiSearch />

            <input
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              value={query}
              className="h-full w-full border-none outline-none px-2 bg-transparent text-lg"
              type="text"
              placeholder="Search"
            />
            {query.length > 0 && (
              <i
                onClick={() => {
                  setQuery("");
                }}
                className="ri-close-fill cursor-pointer text-2xl"
              ></i>
            )}
          </div>
        </IconContext.Provider>
        <div className="absolute flex flex-col w-80 max-h-96 bg-zinc-800 mt-2 rounded-md overflow-auto">
          {searches.map((s, i) => (
            <Link
              key={i}
              className="p-5 text-lg border-b-[.5px] border-zinc-500 mx-2"
            >
              <div className="rounded-md p-3 w-full backdrop-blur-sm bg-white/10">
                <img
                  className="w-full h-20 object-cover rounded-md mb-2"
                  src={
                    s.backdrop_path || s.profile_path
                      ? `https://image.tmdb.org/t/p/original/${
                          s.backdrop_path || s.profile_path
                        }`
                      : no_img
                  }
                  alt="film img"
                />
                <h4 className="font-light text-base">
                  {s.original_title || s.name || s.tite || s.original_name}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
