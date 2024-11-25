import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {

  return (
    <div className="py-10">
      <div className="flex justify-between items-center flex-wrap">
        {data.map((m, i) => (
          <Link
            to={`/${m.media_type || title}/details/${m.id}`}
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
              <h2 className="font-semibold text-xl mb-2 leading-5">
                {m.title || m.original_title || m.name?.slice(0, 29)}
              </h2>
              <div className="flex items-center gap-2">
                <p className="font-light text-base font-mono">
                  <i className="ri-star-s-fill mr-1"></i>
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
