import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL, OPTIONS } from "./constants";


export const fetchCardDetails = createAsyncThunk('cardDetails/fetchCardDetails', async (cardId) => {
    const response = await fetch(BASE_URL+cardId,OPTIONS);
    const data = await response.json();
    return {cardId,data}
})

const cardDetailsSlice = createSlice({
    name: "cardDetails",
    initialState: {
        data: {},
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCardDetails.pending,
                (state) => {
                    state.loading = true
                }
            )
            .addCase(fetchCardDetails.fulfilled,
                (state,action) => {
                    state.loading = false,
                    state.data[action.payload.cardId] = action.payload.data;
                }
            )
            .addCase(fetchCardDetails.rejected,
                (state,action) => {
                    state.loading = false,
                    state.error = action.error.message
                }
            )
    }
})

export default cardDetailsSlice.reducer