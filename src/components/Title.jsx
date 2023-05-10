import React from "react";
import { largeTitle, largeTitleProjectsDetails } from "../motion variants/variants";
import { motion } from "framer-motion";

export const Title = React.memo(({tag, text, content}) => {
    if(tag === 'h2') {
        return (
            <motion.h2 className="Title" variants={largeTitle} initial={'hidden'} animate={'visible'} viewport={{once: true}}>
                {content(`${text}`)}
            </motion.h2>
        )
    }
    else {
        return (
            <motion.h3 className="ProjectDetailsTitle" variants={largeTitleProjectsDetails} initial={'hidden'} animate={'visible'} viewport={{once: true}}>
                {content(`${text}`)}
            </motion.h3>
        )
    }
})