import React from "react";
import { Project } from "./Project";
import { useTranslation } from "react-i18next";
import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { projectsInfoThunk } from "../Redux/Projects/projectsInfoThunk";
import { Title } from "./Title";

export const Projects = React.memo(() => {


    let {t} = useTranslation();
    let dispatch = useDispatch();

    const projects = useSelector(state => state.projects.projects);

    useEffect(() => {
        if(!projects.length) dispatch(projectsInfoThunk);
    }, [projects, dispatch]);

    const projectsMemoizeed = useMemo(() => projects.map(({id, apis, deploy, full, github, short, image, packages, read, stack, title, type}) => <Project
    key={id}
    apis={apis}
    deploy={deploy}
    full={full}
    github={github}
    short={short}
    image={image}
    packages={packages}
    read={read}
    stack={stack}
    title={title}
    type={type}
    content={t}
    />), [projects, t]); 

    return (
        <div className="AllProjects">
            <Title tag='h2' text="title-project" content={t}/>
            <div className="Projects">
                {projectsMemoizeed}
            </div>
        </div>
    )
})