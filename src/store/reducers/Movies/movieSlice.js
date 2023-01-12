import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movie:[],
    busquedaMovie:['Ficcion' , 'Theatre' , 'Kids' ,'Drama' ,'Comedie'],
    busquedaNav: ['Incio' , 'Busqueda' , 'Favorites' ,'Peliculas' , 'Series'],
    isLoading:false,
    navegacion:false,
    setFavoritesObject:[],
    description:[],
    category:[],
    imagen: "https://image.tmdb.org/t/p/original",
    getcategorylink: ''
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        isLoadingPage: (state, /* action */ ) => {
            state.isLoading = !state.isLoading
        },
        NavigateMovie: (state)=>{
            state.navegacion= !state.navegacion
        },
        setMovie: (state , action)=>{
            state.movie = action.payload
        },
        setDescription: (state , action)=>{
            state.description = action.payload
        },
        setCategory:(state , action)=>{
           state.getcategorylink = action.payload 
        },
        getCategoryMovie: (state , action)=>{
            state.category = action.payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { isLoadingPage ,NavigateMovie , setMovie ,
    setDescription , setCategory ,getCategoryMovie
} = movieSlice.actions;