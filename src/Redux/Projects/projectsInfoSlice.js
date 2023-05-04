import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    projects: []
}

export const projectsInfoSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        setProjectsInfo: (state, action) => {
            state.projects = action.payload;
        }
    }
});

export const {setProjectsInfo} = projectsInfoSlice.actions;
export default projectsInfoSlice.reducer;