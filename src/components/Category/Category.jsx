import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategory } from "../../store/reducers/Movies/thunks";
import "./Category.css";
const Category = () => {
  const { getcategorylink, imagen, category } = useSelector(
    (state) => state.movie
  );
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getCategory(getcategorylink));
  }, [getcategorylink]);
  console.log(category);
  console.log(getcategorylink);
  return (
    <section className="container ">
      <div className="row">
        <h2 className="category__title col-12 m-5 text-center fs-1 fw-bold">{params.name}</h2>
        {category.map((movieCategory) => (
          <div className="col-3 mb-5" key={movieCategory.id}>
            <div className="card" >
              <img
                src={`${imagen}${movieCategory.poster_path}`}
                alt=""
                className="card-image-top"
              />
              <div className="card-body">
                <h3 className="card-title mb-3">{movieCategory.title}</h3>
                <h4 className="card-subtitle text-muted ">{movieCategory.release_date}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Category };
