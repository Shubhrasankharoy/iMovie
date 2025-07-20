import { createSlice } from "@reduxjs/toolkit";



const personDetailsSlice = createSlice({
  name: 'personDetails',
  initialState: {
    topLevelDetails: null,
    movieCredits: null,
    tvCredits: null,
    images: null,
  },
  reducers: {
    setTopLevelDetails: (state, action) => {
      state.topLevelDetails = action.payload;
    },
    setMovieCredits: (state, action) => {
      state.movieCredits = action.payload;
    },
    setTvCredits: (state, action) => {
      state.tvCredits = action.payload;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
  },
});

export const {
  setTopLevelDetails,
  setMovieCredits,
  setTvCredits,
  setImages,
} = personDetailsSlice.actions;

export default personDetailsSlice.reducer;
