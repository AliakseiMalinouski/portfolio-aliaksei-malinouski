import {configureStore} from '@reduxjs/toolkit';
import languagesSlice from './Header/languagesSlice';
import navLinksSlice from './Header/navLinksSlice';
import projectsInfoSlice from './Projects/projectsInfoSlice';
import techStackSlice from './About/techStackSlice';
import messagesSlice from './Contact/messagesSlice';

export const store = configureStore({
    reducer: {
        languages: languagesSlice,
        links: navLinksSlice,
        projects: projectsInfoSlice,
        stack: techStackSlice,
        messages: messagesSlice
    }
})