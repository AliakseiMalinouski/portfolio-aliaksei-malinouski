import React from "react";
import { motion } from "framer-motion";
import { apisVariant } from "../motion variants/variants";

export const Api = React.memo(({link, name, custom}) => {
    return (
        <motion.li variants={apisVariant} initial={'hidden'} animate={'visible'} custom={custom}>
           <a href={link}>{name}</a> 
        </motion.li>
    )
})