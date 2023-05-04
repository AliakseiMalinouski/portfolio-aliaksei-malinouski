import React from "react";
import { motion } from "framer-motion";
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';

export const ButtonWrapper = React.memo(({content, type, variantsHero, usuallyVariant, heroButtonText, usuallyText}) => {
    let navigate = useNavigate();
    if(type === 'heroButton') {
        return (
            <motion.div
            initial={'hidden'}
            animate={"visible"}
            variants={variantsHero}
            custom={0.75}
            >
                <Button sx={{mt: '20px', background: "#8847F9"}} variant="contained" onClick={() => navigate('/about')}>
                    {heroButtonText}
                </Button>
            </motion.div>
        )
    }
    else {
        return (
            <div>
                <Button variant="text">
                    {usuallyText}
                </Button>
            </div>
        )
    }
})