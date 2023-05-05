import React from "react";
import { motion } from "framer-motion";
import { packVariant } from "../motion variants/variants";

export const Pack = React.memo(({custom, pack, icon}) => {
    return (
        <motion.li variants={packVariant} initial={'hidden'} animate={'visible'} custom={custom}>
            {pack} <img src={icon} alt="Package"/>
        </motion.li>
    )
})