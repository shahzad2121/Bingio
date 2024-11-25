import { configureStore } from '@reduxjs/toolkit'
import  tvReducer  from '../reducers/tvSlice'
import  movieReducer  from '../reducers/movieSlice'

export const store = configureStore({
  reducer: {
    Tv: tvReducer,
    movie: movieReducer
  },
})