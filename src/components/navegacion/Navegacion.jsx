import React from "react";
import "./Navegacion.css";
import { Link , useNavigate} from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { getBusqueda } from "../../store/reducers/Movies/movieSlice";
import SearchMovie from "../SearchMovie/SearchMovie";
const Navegacion = () => {
  const { busqueda } = useSelector(state => state.movie)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__description">
          <h1 className="nav__logo" onClick={()=>navigate('/')}>NEFTLUX 2.0</h1>

          <ul className={`nav__ul`}>
            <li>
              <Link className="nav__link text-uppercase" to={'/'}>Inicio</Link>
            </li>
            <li>
              <Link className="nav__link text-uppercase" to={'SearchMovie'}>Busqueda</Link>
            </li>
            <li>
              <Link className="nav__link text-uppercase">Mi lista</Link>{" "}
            </li>
            <li>
              <Link className="nav__link text-uppercase">logo</Link>
            </li>
          </ul>
        </div>
        <div className="nav__account">
          <h4 className="nav__user text-light fw-bold" >Christian Peña Yañez</h4>
          <img
            className="nav__image "
            src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/39644-387291-20221114034612.jpg"
            alt=""
          />
        </div>
      </div>
      
    </nav>
  );
};
export { Navegacion };
