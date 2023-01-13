import React from "react";
import { useSelector } from "react-redux";
import "./SearchCard.css";
const SearchCard = () => {
  const { search, imagen } = useSelector((state) => state.movie);

  return (
    <div className="searchCard container ">
      <h2 className="searchCard__title text-light">Movies Search</h2>
      <div className="row">
        {search.map((movie) => (
          <div className="searchCard__movie col-4 " key={movie.id}>
            <img
              src={`${imagen}${movie.poster_path}`}
              alt=""
              className=" searchCard__image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { SearchCard };
