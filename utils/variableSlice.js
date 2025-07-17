const { createSlice } = require("@reduxjs/toolkit");


const variableSlice = createSlice({
    name: "variables",
    initialState: {
        showGPTSearch: false,
        suggestedSearches: null,
        movieGenres: null,
    },
    reducers: {
        toggleShowGPTSearch: (state) => {
            state.showGPTSearch = !state.showGPTSearch
        },
        updateSuggestedSearches: (state, action) => {
            state.suggestedSearches = action.payload;
        },
        setMovieGenres: (state, action) => {
            state.movieGenres = action.payload;
        },
    }
})

export const { toggleShowGPTSearch, updateSuggestedSearches, setMovieGenres } = variableSlice.actions;
export default variableSlice.reducer;