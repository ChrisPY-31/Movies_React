import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isLoadingPage } from "../../store/reducers/Movies/movieSlice";

import './Netflix.css'

const Netflix = () => {
const dispatch = useDispatch() 
const navigate = useNavigate()

  const handleSubtmit = (e)=>{
    e.preventDefault()
    dispatch(isLoadingPage())
    navigate('/')
  }

  return (
    <section className="netflix">
      <div className="netflix__container">
        <div className="netflix__logo ">
          <h1 className="nextflix__title">NEFTLUX 2.0</h1>
          <button className="netflix__btn btn btn-danger fs-4 fw-bold">
            Inicar Seccion
          </button>
        </div>
        <div className="netflix__information text-white">
          <div className="netflix__description text-center">
            <h2 className="netflix__h2">
              Peliculas y series ilimitadas y mucho mas
            </h2>
            <h3 className="netflix__subtitle">
              Disfruta donde quieras. Es gratis
            </h3>
            <p className="netflix__parrafo">
              ¿Quieres ver Netflux ? dale en comenzar y arrancamos
            </p>
            <form action="" className="netflix__formulario" onSubmit={handleSubtmit}>
              <input
                type="text"
                placeholder="Ingresa tu email"
                className="netflix__input"
              />
              <button className="netflix__btn btn btn-lg btn-danger fs-4 fw-bold">
                Comenzar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Netflix };
