const { createSlice } = require("@reduxjs/toolkit");


const variableSlice = createSlice({
    name: "variables",
    initialState: {
        showGPTSearch: false,
        suggestedSearches: null,
    },
    reducers: {
        toggleShowGPTSearch: (state) => {
            state.showGPTSearch = !state.showGPTSearch
        },
        updateSuggestedSearches: (state, action) => {
            state.suggestedSearches = action.payload;
        },
    }
})

export const { toggleShowGPTSearch, updateSuggestedSearches } = variableSlice.actions;
export default variableSlice.reducer;