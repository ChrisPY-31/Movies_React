import axios from "axios";

export const FechApi = axios.create({
    baseURL:'https://api.themoviedb.org/3'
})