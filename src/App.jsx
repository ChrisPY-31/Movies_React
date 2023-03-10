import { useSelector, useDispatch } from "react-redux";
import { Netflix } from "./components/PrincipalNetflix/Netflix";
import { Route, Routes } from "react-router-dom";
import { Navegacion } from "./components/navegacion/Navegacion";
import { useEffect } from "react";
import { getMovie } from "./store/reducers/Movies/thunks";
import "./index.css";
import { DescriptionMovie } from "./components/DescriptionMovie/DescriptionMovie";
import { Category } from "./components/Category/Category";
import MoviesHome from "./components/MoviesHome/MoviesHome";
import SearchMovie from "./components/SearchMovie/SearchMovie";
const App = () => {
  const { isLoading } = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie());
    
  }, []);
  if(!isLoading){
    return(
      <Netflix />
    )
  }
  return (
    <div className="app">
      {isLoading && <Navegacion />}


      <Routes>
        <Route path="/" element={<MoviesHome />} />
        <Route path="descripcion/:id" element={<DescriptionMovie />} />
        <Route path="category/:name" element={<Category />} />
        <Route path="SearchMovie" element={<SearchMovie/>}/>
      </Routes>
    </div>
  );
};

export default App;
