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
import { Pack } from "./Pack";
import { Button } from "@mui/material";

export const ProjectsDetails = React.memo(() => {

    let dispatch = useDispatch();
    
    let {t} = useTranslation();

    let params = useParams();

    let projectType = params.projectname;

    const projects = useSelector(state => state.projects.projects);

    const [currentProject, setCurrentProject] = useState({});
    const [stackState, setStackState] = useState(false);
    const [packState, setPackState] = useState(false);

    useEffect(() => {
        if(!projects.length) dispatch(projectsInfoThunk);
        let neededProject = projects.find(elem => elem.type === projectType);
        setCurrentProject(neededProject);
    }, [dispatch, projects, projectType]);

    useEffect(() => {
        setTimeout(() => {
            setStackState(true);
        }, 3000);
        setTimeout(() => {
            setPackState(true);
        }, 5000);
    }, []);

    let titleMemoizeed = useMemo(() => currentProject && <Title content={t} text={currentProject.title} tag="h3"/>, [currentProject, t]);

    let stackMemoizeed = useMemo(() => currentProject && currentProject.stack?.map((elem, index) => <Tech key={elem.id} custom={index} tech={elem.tech} icon={elem.icon}/>), [currentProject]);

    let packsMemoizeed = useMemo(() => currentProject && currentProject.packs?.map((elem, index) => <Pack key={elem.id} custom={index} pack={elem.pack} icon={elem.icon}/>), [currentProject]);

    return (
        <div className="ProjectsDetails">
            {
                currentProject 
                ?
                <div className="ProjectsDetailsFlexBlock">
                    <motion.img variants={projectsDetailsImage} initial={'hidden'} animate={'visible'} src={currentProject && currentProject.image} alt='Project' className="ProjectImage"/>
                    <div className="MoreAboutProject">
                        {titleMemoizeed}
                        <div className="InfoAboutStackAndPackages">
                            <div className="InfoAboutStack">
                                <Button variant={stackState ? "contained" : "outlined"} className="StackTitle" onClick={() => setStackState(prev => !prev)}>{t("stack")}</Button>
                                {
                                    !stackState ? null : <ul className="StackOfTech">
                                    {stackMemoizeed}
                                </ul>
                                }
                            </div>
                            <div className="InfoAboutPackages">
                                <Button variant={packState ? "contained" : "outlined"} className="PacksTitle" onClick={() => setPackState(prev => !prev)}>{t("stack")}</Button>
                                {
                                    !packState ? null : <ul className="Packes">
                                    {packsMemoizeed}
                                </ul>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
})