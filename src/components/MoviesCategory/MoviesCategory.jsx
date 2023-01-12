import React from "react";
//Css
import "./MoviesCategory.css";
//Router
import { Link } from "react-router-dom";
//Redux
import { useSelector, useDispatch} from "react-redux";
import { setCategory } from "../../store/reducers/Movies/movieSlice";

const MoviesCategory = () => {
  const dispatch = useDispatch()
  const { busquedaMovie } = useSelector((state) => state.movie);
  return (
    <section className="category mb-5 container">
      {
        busquedaMovie.map((category) => (
          <div className="category__link " key={category}>
            <Link 
            className="category__section text-light " 
            name={category} 
            to={`category/${category}`}
            onClick={()=> dispatch(setCategory({name: category}))}
            >
              {category}
            </Link>
          </div>
        ))
      }
    </section>
  );
};

export default MoviesCategory;
