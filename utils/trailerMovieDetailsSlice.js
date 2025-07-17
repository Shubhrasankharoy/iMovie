const { createSlice } = require("@reduxjs/toolkit");



const trailerMovieDetailsSlice = createSlice({
    name: "trailerMovieDetails",
    initialState: {
        movieDetails: null,
        images: null,
    },
    reducers: {
        setMovieDetails: (state, action) => {
            state.movieDetails = action.payload;
        },
        setImages: (state, action) => {
            state.images = action.payload;
        }
    },
});

export const { setMovieDetails, setImages } = trailerMovieDetailsSlice.actions;

export default trailerMovieDetailsSlice.reducer;
