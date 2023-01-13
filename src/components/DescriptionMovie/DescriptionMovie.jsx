import React from "react";
import "./DescriptionMovie.css";
//reducer
import { useSelector } from "react-redux";

const DescriptionMovie = () => {
  const { description, imagen } = useSelector((state) => state.movie);
  
  const divStyle = {
    backgroundImage: ` url(${imagen}${description.backdrop_path})`,
  };
  return (
    <div className="description">
      <div className="description__image" style={divStyle}>
        <div className="description__container">
          <div className="description__logo">
            <img
              className="description__poster"
              src={`${imagen}${description.poster_path}`}
              alt=""
            />
            <div className="description__streamming">
              <img
                className="description__disney"
                src="https://www.themoviedb.org/t/p/original/7rwgEs15tFwyR9NPQ5vpzxTj19Q.jpg"
                alt=""
              />
              <div className="description__links">
                <p className="text-light text-muted fs-4 m-0">
                  Ahora en Streaming
                </p>
                <p className="text-light fs-4 m-0">Ver Ahora</p>
              </div>
            </div>
          </div>
          <div className="description__especification text-white d-flex flex-column  ">
            <div className="description__contenido">
              <h2 className="fw-bold fs-1">{description.original_title}</h2>
              <div className="description__data d-flex">
                <p className="fs-3 mx-3">{description.release_date}</p>
                <p className="fs-3">Para todos los generos</p>
              </div>
              <div className="description__puntuation ">
                <p className="description__average">{description.vote_average} <span className="description__porcen">%</span></p>
              </div>
              <div className="description__vist">
                <h2 className="fs-1">Vista general</h2>
                <h3 className="description__h3 text-ligth fw-light">
                  {description.overview}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DescriptionMovie };
