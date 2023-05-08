
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stack: []
}

export const techStackSlice = createSlice({
    name: "stack",
    initialState,
    reducers: {
        setStack: (state, action) => {
            state.stack = action.payload;
        }
    }
});

export const {setStack} = techStackSlice.actions;
export default techStackSlice.reducer;