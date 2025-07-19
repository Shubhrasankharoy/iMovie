import { createSlice } from "@reduxjs/toolkit";



const personDetailsSlice = createSlice({
  name: 'personDetails',
  initialState: {
    topLevelDetails: null,
    credits: null,
    images: null,
  },
  reducers: {
    setTopLevelDetails: (state, action) => {
      state.topLevelDetails = action.payload;
    },
    setCredits: (state, action) => {
      state.credits = action.payload;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
  },
});

export const {
  setTopLevelDetails,
  setCredits,
  setImages,
} = personDetailsSlice.actions;

export default personDetailsSlice.reducer;
