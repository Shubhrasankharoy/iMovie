const { createSlice } = require("@reduxjs/toolkit");


const movieSlice = createSlice({
    name: "categories",
    initialState: [],
    reducers: {
        addCategory: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addCategory } = movieSlice.actions;
export default movieSlice.reducer