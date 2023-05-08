import {configureStore} from '@reduxjs/toolkit';
import languagesSlice from './Header/languagesSlice';
import navLinksSlice from './Header/navLinksSlice';
import projectsInfoSlice from './Projects/projectsInfoSlice';
import techStackSlice from './About/techStackSlice';


export const store = configureStore({
    reducer: {
        languages: languagesSlice,
        links: navLinksSlice,
        projects: projectsInfoSlice,
        stack: techStackSlice
    }
})