import { FechApi, SearchApi } from "../../../api/api";
import { getCategoryMovie, setCategory, setMovie,getSearchCard } from "./movieSlice";
const API_KEY = "&api_key=95049d755e418ded0e8cdfc751756e40";
const apiComedi =
"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc";
const apiDrama =
"/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10";
const apiTeatre =
"/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc";
const apiKids =
"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc";
const apiFiccion =
"/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc";


export const getMovie = () => {
  return async (dispatch, getState) => {
    const url = `discover/movie?sort_by=popularity.desc${API_KEY}`;
    const { data } = await FechApi.get(`${url}`);
    dispatch(setMovie(data.results));
  };
};

export const getSearch = (SearcMovie)=>{
  return async (dispatch , getState) =>{
    const apiKey = '95049d755e418ded0e8cdfc751756e40'
    const {data} = await SearchApi.get(`?api_key=${apiKey}&query=${SearcMovie}`)
    dispatch(getSearchCard(data.results))
  }
}

export const getCategory = (category) => {
  return async (dispatch, getState) => {
   
    dispatch(setCategory(category));
    if (category.name === "Kids") {
      const { data } = await FechApi.get(`${apiKids} ${API_KEY}`);
      dispatch(getCategoryMovie(data.results))
    }
    if (category.name === 'Theatre'){
      const { data } = await FechApi.get(`${apiTeatre} ${API_KEY}`);
      dispatch(getCategoryMovie(data.results))
    }
    if (category.name === 'Ficcion'){
      const { data } = await FechApi.get(`${apiFiccion} ${API_KEY}`);
      dispatch(getCategoryMovie(data.results))
    }
    if (category.name === 'Drama'){
      const { data } = await FechApi.get(`${apiDrama} ${API_KEY}`);
      dispatch(getCategoryMovie(data.results))
    }
    if (category.name === 'Comedie'){
      const { data } = await FechApi.get(`${apiComedi} ${API_KEY}`);
      dispatch(getCategoryMovie(data.results))
    }

   
  };
};
