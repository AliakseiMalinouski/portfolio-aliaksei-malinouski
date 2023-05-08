import React from "react";
import { useEffect } from "react";
import { Title } from "./Title";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { techStackThunk } from "../Redux/About/techStackThunk";

export const About = React.memo(() => {

    let {t} = useTranslation();

    let dispatch = useDispatch();

    const stackOfTech = useSelector(state => state.stack.stack);

    useEffect(() => {
        if(!stackOfTech.length) dispatch(techStackThunk);
    }, [dispatch, stackOfTech]);

    console.log(stackOfTech)

    return (
        <div className="About">
            <Title tag='h2' text="about-me" content={t}/>
        </div>
    )
})