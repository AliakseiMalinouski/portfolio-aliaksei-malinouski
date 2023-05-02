import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    links: []
}

export const navLinksSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {
        setNavLinks: (state, action) => {
            state.links = action.payload;
        }
    }
});

export const {setNavLinks} = navLinksSlice.actions;
export default navLinksSlice.reducer;