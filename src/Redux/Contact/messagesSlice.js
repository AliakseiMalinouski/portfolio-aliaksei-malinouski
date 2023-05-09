
import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    messages: []
}

export const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        addNewMessage: (state, action) => {
            state.messages.push(action.payload);
        }
    }
});

export const {addNewMessage} = messagesSlice.actions;
export default messagesSlice.reducer;