import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projectVariant } from "../motion variants/variants";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export const Project = React.memo(({id, apis, deploy, full, github, short, image, packages, read, stack, title, type, content}) => {

    const [windowWidthState, setWindowWidthState] = useState(false);

    let navigate = useNavigate();

    const goToDetailsProjectParent = () => {
        const uri = "/projectsdetails/" + type;
        navigate(uri);
    }

    useEffect(() => {
        let windowWidth1024 = window.matchMedia("(max-width: 1024px)");
        if(windowWidth1024.matches) setWindowWidthState(true);
    }, []);

    return (
        <motion.div className="Project" variants={projectVariant} initial={'hidden'} whileInView={'visible'} custom={id} viewport={{once: true, amount: 0.2}}>
            <img className="ProjectImage" src={image} alt="Project" onClick={goToDetailsProjectParent}/>
            <div className="ShortProjectInfo">
                <h3>{content(`${title}`)}</h3>
                {
                    windowWidthState ? <p>{content(`${short}`)}</p> : <p>{content(`${full}`)}</p>
                }
                <Button variant="outlined" onClick={goToDetailsProjectParent}>
                    {content(`${read}`)}
                </Button>
            </div>
        </motion.div>
    )
})