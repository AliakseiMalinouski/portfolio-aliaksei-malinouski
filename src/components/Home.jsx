import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Hero} from './Hero';
import { mainTitle, heroParagraph, heroSocial, myPhoto } from "../motion variants/variants";
import { useTranslation } from "react-i18next";
import { projectsInfoThunk } from "../Redux/Projects/projectsInfoThunk";
import { Project } from "./Project";
import { Contacts } from "./Contacts";
import { About } from "./About";
import { useLocation } from "react-router-dom";
import { Title } from "./Title";

export const Home = React.memo(() => {

    let {t} = useTranslation();
    let dispatch = useDispatch();

    const projects = useSelector(state => state.projects.projects);

    let location = useLocation();

    useEffect(() => {
        if(!projects.length) dispatch(projectsInfoThunk);
    }, [projects, dispatch]);

    let heroMemoizeed = useMemo(() => <Hero key={1}
    variantTitle={mainTitle}
    myPhoto={myPhoto}
    variantSocial={heroSocial}
    variantP={heroParagraph}
    heroButtonText={t("hero-button-text")}
    paragraph={t("hero-paragraph")}/>, [t]);

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
        <div className="Home">
            {heroMemoizeed}
            <Title tag='h2' text="title-project" content={t}/>
            <div className="Projects">
                {projectsMemoizeed}
            </div>
            <Contacts/>
            <About/>
        </div>
    )
})