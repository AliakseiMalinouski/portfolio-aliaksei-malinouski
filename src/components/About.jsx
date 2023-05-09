import React from "react";
import { useEffect, useMemo } from "react";
import { Title } from "./Title";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { techStackThunk } from "../Redux/About/techStackThunk";
import { Tech } from "./Tech";
import { useLocation } from "react-router-dom";
import { techStackTitleVariant, largeParagraphAboutMeVariant } from "../motion variants/variants";
import { motion } from "framer-motion";

export const About = React.memo(() => {

    let {t} = useTranslation();

    let dispatch = useDispatch();

    let location = useLocation();

    const stackOfTech = useSelector(state => state.stack.stack);

    useEffect(() => {
        if(!stackOfTech.length) dispatch(techStackThunk);
    }, [dispatch, stackOfTech]);

    let techMemoizeed = useMemo(() => stackOfTech && stackOfTech?.map((elem, index) => <Tech key={elem.id} custom={index} tech={location.pathname === '/' || location.pathname === '/about' ? "" : elem.tech} icon={elem.icon} location={location.pathname === '/' ? location.pathname : ""}/>), [stackOfTech, location])

    return (
        <div className="About">
            <Title tag='h2' text="about-me" content={t}/>
            <div className="FlexGroup">
                <motion.h4 variants={techStackTitleVariant} initial={'hidden'} animate={'visible'}>{t('my-tech-stack')}</motion.h4>
                <ul className="StackOfTech">
                    {techMemoizeed}
                </ul>
            </div>
            <div className="MoreAboutMe">
                <motion.p variants={largeParagraphAboutMeVariant} initial={'hidden'} animate={'visible'}>
                    {t("all-info-about-me")}   
                </motion.p>
            </div>
        </div>
    )
})