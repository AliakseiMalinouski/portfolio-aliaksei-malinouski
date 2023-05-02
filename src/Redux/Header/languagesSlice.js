import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    languages: [],
    currentLanguage: 'en'
}

export const languagesSlice = createSlice({
    name: 'languages',
    initialState,
    reducers: {
        setLanguages: (state, action) => {
            state.languages = action.payload;
        },
        updateCurrentLanguage: (state, action) => {
            state.currentLanguage = action.payload;
        }
    }
});

export const {setLanguages, updateCurrentLanguage} = languagesSlice.actions;
export default languagesSlice.reducer;