import React from "react";
import Nav from "../partials/Nav";
import Header from "../partials/Header";
import HorizontalCard from "../partials/HorizontalCard";

const Home = () => {
  document.title = "Bingio | Home";
  return Header && HorizontalCard ? (
    <div className="max-w-screen-2xl mx-auto min-h-screen">
      <Nav />
      <Header />
      <HorizontalCard />
    </div>
  ) : (
    <h1 className="text-black">Loading...</h1>
  );
};

export default Home;
