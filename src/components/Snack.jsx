import React from "react";
import {Snackbar, Alert} from '@mui/material';
import { transformString } from "../helpers/transformString";

export const Snack = React.memo(({open, handleClose, currentLanguage, content}) => {
    let result = transformString('language', currentLanguage);
    return (
        <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
            <Alert severity="success">
                {result.languageParams.text}
            </Alert>
        </Snackbar>
    )
})