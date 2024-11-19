import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../Utils/Axios";
import Dropdown from "./Dropdown";

const HorizontalCard = () => {
  const [popular, setPopular] = useState([]);
  const [category, setCategory] = useState('')

  const getCardData = async () => {
    try {
      const { data } = await instance.get("/trending/${category}/day");

      // Get a random movie and wrap it in an array
      // const getimg =
      //   data.results[Math.floor(Math.random() * data.results.length)];
      setPopular(data.results);
      // setSelect(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(category);
  

  useEffect(() => {
    getCardData();
  }, [category]);

  return (
    <div className="w-full py-10">
      <div className="px-10 flex items-center justify-between mb-5">
        <h3 className="font-semibold text-2xl">Live Show</h3>
        <Dropdown title="Select Category" func={(e) => setCategory(e.target.value)} options={['Tv', 'Movies', 'All']}  />
        <Link className="text-lg text-center">
          See all <i className="ri-arrow-right-line text-[#3BE477]"></i>
        </Link>
      </div>
      <div className="card flex items-center min-w-screen overflow-hidden justify-between overflow-x-auto gap-5">
        {popular.map((elem, i) => (
          <Link
            key={i}
            className="flex min-w-[30%] bg-[#1F2937] p-2 rounded-md"
          >
            <img
              className="w-32 h-32 object-cover object-center rounded-md"
              src={`https://image.tmdb.org/t/p/original/${
                elem.backdrop_path || elem.profile_path
              }`}
              alt="Movie Poster"
            />
            <div className="px-4 py-5">
              <h2 className="font-semibold text-xl">
                {elem.title || elem.original_title}
              </h2>
              <p className="font-light text-base font-mono">
                Rating-
                <span className="text-[#3BE477] text-sm">
                  {elem.vote_average}
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCard;
