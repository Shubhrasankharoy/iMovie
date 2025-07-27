const { createSlice } = require("@reduxjs/toolkit");


const variableSlice = createSlice({
    name: "variables",
    initialState: {
        showGPTSearch: false,
        suggestedSearches: null,
        movieGenres: null,
        activeMovieDetailsNavItem: 'Overview',
        activePersonDetailsNavItem: 'Details',
        language: 'en',
        alert: {
            type: null,
            msg: null
        }
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
        setActiveMovieDetailsNavItem: (state, action) => {
            state.activeMovieDetailsNavItem = action.payload;
        },
        setActivePersonDetailsNavItem: (state, action) => {
            state.activePersonDetailsNavItem = action.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload
        },
        setAlert: (state, action) => {
            state.alert = action.payload;
        },
        clearVariables: (state) => {
            state.showGPTSearch = false;
            state.suggestedSearches = null;
            state.movieGenres = null;
            state.activeMovieDetailsNavItem = 'Overview';
            state.activePersonDetailsNavItem = 'Details';
            state.language = 'en';
        }
    }
})

export const { toggleShowGPTSearch, updateSuggestedSearches, setMovieGenres, setActiveMovieDetailsNavItem, setActivePersonDetailsNavItem, setLanguage,setAlert, clearVariables } = variableSlice.actions;
export default variableSlice.reducer;