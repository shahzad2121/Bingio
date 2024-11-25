import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { asyncloadmovie } from "../Actions/MovieActions";
import { removeMovie } from "../reducers/movieSlice";
import Nav from "../partials/Nav";
import Loading from "../partials/Loading";
import HorizontalCard from "../partials/HorizontalCard";

const TvDetails = () => {
  const {pathname} = useLocation()
  const dispatch = useDispatch();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removeMovie);
    };
  }, [id]);
  console.log(info);

  return info ? (
    <div className="min-h-screen">
      <Nav />
      <div className="max-w-screen-2xl relative bg-black px-10 ">
        <Link to={`${pathname}/trailer`}
          className="w-[75%] bg-red-300 h-[70vh] px-10 pb-16 flex justify-center items-center"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.6),rgba(0,0,0,0.2)), url(https://image.tmdb.org/t/p/original/${
              info.details.backdrop_path
            })`,
            backgroundPosition: "center left center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Link 
        
          className=" bg-[#3BE477] duration-300 flex items-center py-2 px-6 gap-3 rounded-md w-fit mt-5">
            <i className="ri-play-large-fill text-4xl"></i>
            
          </Link>
        </Link>
        <div className="flex items-center w-[75%] justify-between pt-5">
          <div className="flex items-center">
            <div
              className="w-20 h-20 bg-red-200 rounded-full mr-5"
              style={{
                background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.6),rgba(0,0,0,0.2)), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
                backgroundPosition: "center left center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="flex flex-col">
              <h6>{info.details.original_title?.toUpperCase()}</h6>
              <p className="font-light text-base font-mono">
                <i className="ri-star-s-fill mr-1"></i>
                <span className="text-[#3BE477] text-sm">
                  {info.details.vote_average}
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3">
            <a
              target="_blank"
              href={info.details.homepage}
              className="px-3 p-2 bg-[#3BE477] rounded-full"
            >
              Go to Official Site
            </a>
            <a
              target="_blank"
              // href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
              className="px-3 p-2 bg-[#3BE477] rounded-full"
            >
              Go to IMDB
            </a>
          </div>
        </div>
      </div>
      <div>
        <HorizontalCard data={info.recommendations.length>0?info.recommendations:info.similar} />
      </div>
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;

