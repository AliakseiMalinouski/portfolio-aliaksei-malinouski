import React from "react";
import { motion } from "framer-motion";
import {ButtonWrapper} from './Button';
import { projectVariant } from "../motion variants/variants";

export const Project = React.memo(({id, apis, deploy, full, github, short, image, packages, read, stack, title, type, content}) => {
    return (
        <motion.div className="Project" variants={projectVariant} initial={'hidden'} whileInView={'visible'} custom={id} viewport={{once: true, amount: 0.2}}>
            <img className="ProjectImage" src={image} alt="Project"/>
            <div className="ShortProjectInfo">
                <h3>{content(`${title}`)}</h3>
                <p>{content(`${full}`)}</p>
                <ButtonWrapper type={"projectButton"} usuallyText={content(`${read}`)}  />
            </div>
        </motion.div>
    )
})