import React from "react";
import Nav from "../partials/Nav";
import { Link, useNavigate } from "react-router-dom";
import MCards from "../partials/MCards";

const Movies= () => {
  document.title = "Bingio | Movies"
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen">
      <Nav />
      <div className="px-10">
        <div className="flex items-center gap-2">
          <i
            onClick={() => navigate(-1)}
            class="ri-arrow-left-line text-3xl cursor-pointer"
          ></i>
          <h2 className="font-bold text-4xl">Movies</h2>
        </div>
        <Link>
          <MCards />
        </Link>
      </div>
    </div>
  );
};

export default Movies;
