import React from "react";
import {motion, AnimatePresence} from 'framer-motion';
import {eventLoop} from '../events';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const LanguageSelect = React.memo(({languages, content, currentLanguage}) => {

    const changeCurrentLanguage = (language) => {
        eventLoop.emit("changeCurrentLanguage", language);
    }

    return (
        <FormControl sx={{ mr: '100px', minWidth: 120}}  size="small">
            <InputLabel id="demo-select-small-label">{currentLanguage}</InputLabel>
            <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label={currentLanguage}
            >
                {
                    languages.map(({id, language}) => <MenuItem
                    key={id} 
                    onClick={() => changeCurrentLanguage(language)}
                    >
                        {language}
                    </MenuItem>)
                }
            </Select>
        </FormControl>
    )
})