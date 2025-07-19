const { createSlice } = require("@reduxjs/toolkit");


const variableSlice = createSlice({
    name: "variables",
    initialState: {
        showGPTSearch: false,
        suggestedSearches: null,
        movieGenres: null,
        activeDetailsNavItem: 'Overview',
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
        setActiveDetailsNavItem: (state, action) => {
            state.activeDetailsNavItem = action.payload;
        },
    }
})

export const { toggleShowGPTSearch, updateSuggestedSearches, setMovieGenres, setActiveDetailsNavItem } = variableSlice.actions;
export default variableSlice.reducer;