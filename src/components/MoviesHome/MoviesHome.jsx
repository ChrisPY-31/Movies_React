import React from "react";
import { SliderMovie } from "../SliderMovie/SliderMovie";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import MoviesCategory from "../MoviesCategory/MoviesCategory";
import './MoviesHome.css'
const MoviesHome = () => {
  return (
    <div className="MoviesHome">
      <SliderMovie />
      <MoviesCategory />
      <MoviesCard />
    </div>
  );
};

export default MoviesHome;
