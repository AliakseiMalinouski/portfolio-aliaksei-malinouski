import React from "react";
import { motion } from "framer-motion";
import { projectVariant } from "../motion variants/variants";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export const Project = React.memo(({id, apis, deploy, full, github, short, image, packages, read, stack, title, type, content}) => {

    let navigate = useNavigate();

    const goToDetailsProjectParent = () => {
        const uri = "/projectsdetails/" + type;
        navigate(uri);
    }

    return (
        <motion.div className="Project" variants={projectVariant} initial={'hidden'} whileInView={'visible'} custom={id} viewport={{once: true, amount: 0.2}}>
            <img className="ProjectImage" src={image} alt="Project" onClick={goToDetailsProjectParent}/>
            <div className="ShortProjectInfo">
                <h3>{content(`${title}`)}</h3>
                <p>{content(`${full}`)}</p>
                <Button variant="outlined" onClick={goToDetailsProjectParent}>
                    {content(`${read}`)}
                </Button>
            </div>
        </motion.div>
    )
})