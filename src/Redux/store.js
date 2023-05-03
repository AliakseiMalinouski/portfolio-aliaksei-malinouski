import {configureStore} from '@reduxjs/toolkit';
import languagesSlice from './Header/languagesSlice';
import navLinksSlice from './Header/navLinksSlice';


export const store = configureStore({
    reducer: {
        languages: languagesSlice,
        links: navLinksSlice,
    }
})