import React from "react";
import { motion } from "framer-motion";
import {ButtonWrapper} from './Button';

export const Project = React.memo(({id, apis, deploy, full, github, short, image, packages, read, stack, title, type, content}) => {
    return (
        <motion.div className="Project">
            <img src={image} alt="Project"/>
            <div className="ShortProjectInfo">
                <h3>{content(`${title}`)}</h3>
                <p>{content(`${short}`)}</p>
                <ButtonWrapper type={"usuallyButton"} usuallyText={content(`${read}`)}  />
            </div>
        </motion.div>
    )
})