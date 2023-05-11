
import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    loadState: "completed"
}

export const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        startLoading: (state, action) => {
            state.loadState = action.payload;
        },
        finishLoading: (state, action) => {
            state.loadState = action.payload;
        },
        errorLoading: (state, action) => {
            state.loadState = action.payload;
        }
    }
});

export const {startLoading, finishLoading, errorLoading} = messagesSlice.actions;
export default messagesSlice.reducer;