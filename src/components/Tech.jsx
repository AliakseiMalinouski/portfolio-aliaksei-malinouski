import React from "react";
import { techVariant } from "../motion variants/variants";
import { motion } from "framer-motion";

export const Tech = React.memo(({custom, tech, icon, location}) => {
    if(location === '/') {
        return (
            <motion.li variants={techVariant} initial={'hidden'} whileInView={'visible'} viewport={{once: true}} custom={custom}>
                {tech} <img src={icon} alt='Tech'/>
            </motion.li>
        )
    }
    else {
        return (
            <motion.li variants={techVariant} initial={'hidden'} animate={'visible'} custom={custom}>
                {tech} <img src={icon} alt='Tech'/>
            </motion.li>
        )
    }
})