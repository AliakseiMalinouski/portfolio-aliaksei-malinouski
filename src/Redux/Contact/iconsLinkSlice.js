import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    iconsLink: {},
    loadState: false
}

export const iconsLinkSlice = createSlice({
    name: "iconsLink",
    initialState,
    reducers: {
        setIconsLink: (state, action) => {
            state.iconsLink = action.payload;
        },
        setLoadStateIconsLinks: (state, action) => {
            state.loadState = action.payload;
        }
    }
});

export const {setIconsLink, setLoadStateIconsLinks} = iconsLinkSlice.actions;
export default iconsLinkSlice.reducer;