import { configureStore } from '@reduxjs/toolkit'
import { movieSlice } from './reducers/Movies'

export const store = configureStore({
  reducer: {
    movie: movieSlice.reducer
    },  
})