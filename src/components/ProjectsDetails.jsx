import React, { useMemo } from "react";
import { useEffect, useState, useRef } from "react";
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
import { LinksToProject } from "./LinksToProject";
import { Api } from "./Api";
import {scrollToElement} from '../helpers/scrollToElement';

export const ProjectsDetails = React.memo(() => {

    let dispatch = useDispatch();
    
    let {t} = useTranslation();

    let params = useParams();

    let parent = useRef();

    let projectType = params.projectname;

    const projects = useSelector(state => state.projects.projects);

    const [currentProject, setCurrentProject] = useState({});
    const [stackState, setStackState] = useState(false);
    const [packState, setPackState] = useState(false);
    const [apisState, setApisState] = useState(false);

    useEffect(() => {
        scrollToElement('element', parent.current);
    }, [parent]);

    useEffect(() => {
        if(!projects.length) dispatch(projectsInfoThunk);
        let neededProject = projects.find(elem => elem.type === projectType);
        setCurrentProject(neededProject);
    }, [dispatch, projects, projectType]);

    useEffect(() => {
        setTimeout(() => {
            setStackState(true);
            setPackState(true);
        }, 1000);
    }, []);

    let titleMemoizeed = useMemo(() => currentProject && <Title content={t} text={currentProject.title} tag="h3"/>, [currentProject, t]);

    let stackMemoizeed = useMemo(() => currentProject && currentProject.stack?.map((elem, index) => <Tech key={elem.id} custom={index} tech={elem.tech} icon={elem.icon}/>), [currentProject]);

    let packsMemoizeed = useMemo(() => currentProject && currentProject.packs?.map((elem, index) => <Pack key={elem.id} custom={index} pack={elem.pack} icon={elem.icon}/>), [currentProject]);

    let linksToProjectMemoizeed = useMemo(() => currentProject && <LinksToProject github={currentProject.github} vercel={currentProject.deploy}/>, [currentProject]);

    let apisMemoizeed = useMemo(() => currentProject && currentProject.apis?.map((elem, index) => <Api key={elem.id} link={elem.link} name={elem.name} custom={index} icon={elem.icon}/>), [currentProject])

    return (
        <div className="ProjectsDetails">
            {
                currentProject 
                ?
                <>
                <div className="ProjectsDetailsFlexBlock" ref={parent}>
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
                <motion.div className="OtherInfoAboutCurrentProject"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1.5
                }}
                >
                    <h4>{t('links')} <img src="https://i.ibb.co/vDsbfZR/down-arrow.png" alt="Arrow"/></h4>
                    {linksToProjectMemoizeed}
                    <p>
                        {t(`${currentProject.full}`)}
                    </p>
                    <Button variant={apisState ? 'contained' : 'outlined'}
                    onClick={() => {
                        setApisState(prev => !prev);
                    }}
                    >{t('api')}</Button>
                    <ul className="ApiList">
                        {
                            apisState ? apisMemoizeed : null
                        }
                    </ul>
                </motion.div>
                </>
                :
                null
            }
        </div>
    )
})