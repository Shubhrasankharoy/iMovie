const { createSlice } = require("@reduxjs/toolkit");


const variableSlice = createSlice({
    name: "variable",
    initialState: {
        showGPTSearch: false
    },
    reducers: {
        toggleShowGPTSearch: (state) => {
            state.showGPTSearch = !state.showGPTSearch
        }
    }
})

export const { toggleShowGPTSearch } = variableSlice.actions;
export default variableSlice.reducer;