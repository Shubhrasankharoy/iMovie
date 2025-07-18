const { createSlice } = require("@reduxjs/toolkit");



const trailerMovieDetailsSlice = createSlice({
    name: "trailerMovieDetails",
    initialState: {
        movieDetails: null,
        images: null,
        videoKeys: null,
        credits: null,
        recommendations: null,
    },
    reducers: {
        setMovieDetails: (state, action) => {
            state.movieDetails = action.payload;
        },
        setImages: (state, action) => {
            state.images = action.payload;
        },
        setVideoKeys: (state, action) => {
            state.videoKeys = action.payload;
        },
        setCredits: (state, action) => {
            state.credits = action.payload;
        },
        setRecommendations: (state, action) => {
            state.recommendations = action.payload;
        },
    },
});

export const { setMovieDetails, setImages, setVideoKeys, setCredits, setRecommendations } = trailerMovieDetailsSlice.actions;

export default trailerMovieDetailsSlice.reducer;
