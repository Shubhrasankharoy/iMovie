import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesReducer from './movieSlice'
import variableReducer from './variableSlice'
import cardDetailsReducer from './cardDetailsSlice'
import trailerMovieDetailsReducer from './trailerMovieDetailsSlice'
import personDetailsReducer from './personDetailsSlice'

const appStore = configureStore({
    reducer: {
        user: userReducer,
        categories: moviesReducer,
        trailerMovieDetails: trailerMovieDetailsReducer,
        variables: variableReducer,
        cardDetails: cardDetailsReducer,
        personDetails: personDetailsReducer
    }
})

export default appStore;