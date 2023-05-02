import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Link = React.memo(({link, translateKey, setLanguage}) => {
    return (
        <NavLink to={link}>
            <motion.span
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            >
                {setLanguage(`${translateKey}`)}
            </motion.span>
        </NavLink>
    )
})