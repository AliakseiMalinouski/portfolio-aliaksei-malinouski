import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projectVariant, projectMobileVariant } from "../motion variants/variants";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export const Project = React.memo(({id, apis, deploy, full, github, short, image, packages, read, stack, title, type, content}) => {

    const [windowWidthState, setWindowWidthState] = useState(false);
    const [mobileWidth, setMobileWidth] = useState(false);

    let navigate = useNavigate();

    const goToDetailsProjectParent = () => {
        const uri = "/projectsdetails/" + type;
        navigate(uri);
    }

    useEffect(() => {
        let windowWidth1024 = window.matchMedia("(max-width: 1024px)");
        let windowWidth560 = window.matchMedia("(max-width: 720px)");
        if(windowWidth1024.matches) setWindowWidthState(true);
        if(windowWidth560.matches) setMobileWidth(true);
    }, []);

    if(mobileWidth) {
        return (
            <motion.div className="Project" variants={projectMobileVariant} initial={'hidden'} whileInView={'visible'} custom={id} viewport={{once: true, amount: 0.2}}
            >
                {
                    mobileWidth
                    ?
                    null
                    :
                    <img className="ProjectImage" src={image} alt="Project" onClick={goToDetailsProjectParent}/>
                }
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
    }
    else {
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
    }
})