import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { projectsInfoThunk } from "../Redux/Projects/projectsInfoThunk";
import { useTranslation } from "react-i18next";
import {Title} from './Title';
import { motion } from "framer-motion";
import { projectsDetailsImage } from "../motion variants/variants";
import { Tech } from "./Tech";

export const ProjectsDetails = React.memo(() => {

    let dispatch = useDispatch();
    
    let {t} = useTranslation();

    let params = useParams();

    let projectType = params.projectname;

    const projects = useSelector(state => state.projects.projects);

    const [currentProject, setCurrentProject] = useState({});

    useEffect(() => {
        if(!projects.length) dispatch(projectsInfoThunk);
        let neededProject = projects.find(elem => elem.type === projectType);
        setCurrentProject(neededProject);
    }, [dispatch, projects, projectType]);

    let titleMemoizeed = useMemo(() => currentProject && <Title content={t} text={currentProject.title} tag="h3"/>, [currentProject, t]);

    let stackMemoizeed = useMemo(() => currentProject && currentProject.stack?.map(({id, tech, icon}) => <Tech key={id} tech={tech} icon={icon}/>), [currentProject])

    return (
        <div className="ProjectsDetails">
            {
                currentProject 
                ?
                <div className="ProjectsDetailsFlexBlock">
                    <motion.img variants={projectsDetailsImage} initial={'hidden'} animate={'visible'} src={currentProject && currentProject.image} alt='Project' className="ProjectImage"/>
                    <div className="MoreAboutProject">
                        {titleMemoizeed}
                        <ul>
                            {
                                stackMemoizeed
                            }
                        </ul>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
})