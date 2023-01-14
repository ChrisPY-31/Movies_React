//redux
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import { setDescription } from "../../store/reducers/Movies/movieSlice";
import './MoviesCard.css'

const MoviesCard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { movie ,imagen} = useSelector((state) => state.movie);
  const handleClick = (peli)=>{
    dispatch(setDescription(peli))
    navigate(`descripcion/:${peli.id}`)
  }  

  return (
    <section className="container">
      <div className="row">
        {movie.length === 0
          ? ""
          : movie.map((peli) => (
              <div className="col-12 col-md-6 col-lg-4 mb-5" key={peli.id}>
                <div className="card-tamaño card">
                  <img
                    src={`${imagen}${peli.poster_path}`}
                    alt=""
                    className="card-image-top imagen" height={'500px'}
                    onClick={()=>handleClick(peli)}
                  />
                  <div className="card-body" >
                    <h5 className="card-title fs-2">{peli.title}</h5>
                    <h6 className="card-subtitle text-muted fs-4">{peli.release_date}</h6>
                    <h6 className="card-text">{peli.vote_average }</h6>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};

export { MoviesCard };
