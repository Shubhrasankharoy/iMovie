const { createSlice } = require("@reduxjs/toolkit");


const movieSlice = createSlice({
    name: "categories",
    initialState: [],
    reducers: {
        addCategory: (state, action) => {
            state.push(action.payload)
        },
        clearCategory: (state) => {
            state = []
        }
    }
})

export const { addCategory, clearCategory } = movieSlice.actions;
export default movieSlice.reducer