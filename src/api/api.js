import axios from "axios";

export const FechApi = axios.create({
    baseURL:'https://api.themoviedb.org/3'
})
export const SearchApi = axios.create({
    baseURL:'https://api.themoviedb.org/3/search/movie'
})