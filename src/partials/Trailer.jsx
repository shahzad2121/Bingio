import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Trailer = () => {
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytVideo = useSelector((state) => state[category].info.videos);
  const navigate = useNavigate();
  return <div className="bg-[rgba(0,0,0,.9)] absolute z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center">
    <Link onClick={()=>navigate(-1)}>
    <i className="ri-close-line text-5xl absolute right-[6%] top-[7%]"></i>
    </Link>
    <ReactPlayer
    height={600}
    width={1200}
    url={`https://www.youtube.com/watch?v=${ytVideo.key}`}
    />
  </div>;
};

export default Trailer;
