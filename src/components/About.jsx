import React from "react";
import { useEffect, useMemo } from "react";
import { Title } from "./Title";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { techStackThunk } from "../Redux/About/techStackThunk";
import { Tech } from "./Tech";
import { useLocation } from "react-router-dom";

export const About = React.memo(() => {

    let {t} = useTranslation();

    let dispatch = useDispatch();

    let location = useLocation();

    const stackOfTech = useSelector(state => state.stack.stack);

    useEffect(() => {
        if(!stackOfTech.length) dispatch(techStackThunk);
    }, [dispatch, stackOfTech]);

    let techMemoizeed = useMemo(() => stackOfTech && stackOfTech?.map((elem, index) => <Tech key={elem.id} custom={index} tech={location.pathname === '/' ? "" : elem.tech} icon={elem.icon} location={location.pathname === '/' ? location.pathname : ""}/>), [stackOfTech, location])

    return (
        <div className="About">
            <Title tag='h2' text="about-me" content={t}/>
            <div className="FlexGroup">
                <h4>{t('my-tech-stack')}</h4>
                <ul className="StackOfTech">
                    {techMemoizeed}
                </ul>
            </div>
        </div>
    )
})