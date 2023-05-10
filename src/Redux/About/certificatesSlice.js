
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    certificates: []
}

export const certificatesSlice = createSlice({
    name: "certificates",
    initialState,
    reducers: {
        setCertificates: (state, action) => {
            state.certificates = action.payload;
        }
    }
});

export const {setCertificates} = certificatesSlice.actions;
export default certificatesSlice.reducer;