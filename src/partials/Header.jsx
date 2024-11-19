import React, { useEffect, useState } from "react";
import instance from "../Utils/Axios";
import { Link } from "react-router-dom";

const Header = () => {
  const [headerImg, setHeaderImg] = useState([]);
  const [info, setInfo] = useState("");
  const getHeaderimg = async () => {
    try {
      const { data } = await instance.get("trending/all/week");

      const getimg =
        data.results[(Math.random() * data.results.length).toFixed()]; // math.random get random image from api and .toFixed is used to find img dynamically and also math.random will give decimall value we use .tofind to make it number.
      setHeaderImg(getimg);
      // console.log(getimg);
      // console.log(getimg.name);
      setInfo(getimg);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getHeaderimg();
  }, []);

  return (
    <div className="px-10">
      <div
        className="w-full h-[70vh] px-10 pb-16 flex justify-end rounded-md flex-col"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.6),rgba(0,0,0,0.2)), url(https://image.tmdb.org/t/p/original/${
            headerImg.backdrop_path || headerImg.poster_path
          })`,
          backgroundPosition: "center left center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",

        }}
      >
        <div className="">
          <h1 className="font-semibold text-5xl mb-2">
            {info.name || info.original_title || info.original_name}
          </h1>
          <div className="flex items-center gap-5 mb-2 font-mono">
            <h5 className="font-medium text-2xl">
              {info.media_type ? info.media_type.toUpperCase() : "no"}
            </h5>
            <h6 className="font-medium text-2xl">|</h6>
            <h5 className="font-medium text-2xl">
              {info.first_air_date || info.release_date}
            </h5>
          </div>
          <h5></h5>
          <h3 className="text-base text-zinc-200 font-mono font-light tracking-tight leading-tight w-[40%]">
            {info.overview
              ? info.overview.slice(0, 250)
              : "no description available"}
          </h3>
          <Link className="bg-zinc-700 hover:bg-[#3BE477] duration-300 flex items-center py-2 px-3 gap-3 rounded-md w-fit mt-5">
            <img className="w-8 h-8 " src="../public/play.png" alt="" />
            Watch Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
