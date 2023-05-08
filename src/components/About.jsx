import React from "react";
import { Title } from "./Title";
import { useTranslation } from "react-i18next";


export const About = React.memo(() => {

    let {t} = useTranslation();

    return (
        <div className="About">
            <Title tag='h2' text="about-me" content={t}/>
        </div>
    )
})