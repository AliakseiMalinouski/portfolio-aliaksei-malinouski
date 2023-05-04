import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Hero} from './Hero';
import { mainTitle, heroParagraph, heroSocial, myPhoto } from "../motion variants/variants";
import { useTranslation } from "react-i18next";
import { projectsInfoThunk } from "../Redux/Projects/projectsInfoThunk";
import { Project } from "./Project";

export const Home = React.memo(() => {

    let {t} = useTranslation();
    let dispatch = useDispatch();

    const projects = useSelector(state => state.projects.projects);

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
            <div className="Projects">
                {projectsMemoizeed}
            </div>
        </div>
    )
})