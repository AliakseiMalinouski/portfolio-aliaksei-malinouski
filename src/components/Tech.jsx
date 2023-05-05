import React from "react";
import { techVariant } from "../motion variants/variants";
import { motion } from "framer-motion";

export const Tech = React.memo(({custom, tech, icon}) => {
    return (
        <motion.li variants={techVariant} initial={'hidden'} animate={'visible'} custom={custom}>
            {tech} <img src={icon} alt='Tech'/>
        </motion.li>
    )
})