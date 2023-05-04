import React from "react";
import { largeTitle } from "../motion variants/variants";
import { motion } from "framer-motion";

export const Title = React.memo(({tag, text, content}) => {
    if(tag === 'h2') {
        return (
            <motion.h2 className="Title" variants={largeTitle} initial={'hidden'} animate={'visible'}>
                {content(`${text}`)}
            </motion.h2>
        )
    }
})