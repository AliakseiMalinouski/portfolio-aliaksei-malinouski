import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import {Hero} from './Hero';
import { mainTitle, heroParagraph, heroSocial, myPhoto } from "../motion variants/variants";
import { useTranslation } from "react-i18next";

export const Home = React.memo(() => {

    let {t} = useTranslation();

    let heroMemoizeed = useMemo(() => <Hero key={1}
    variantTitle={mainTitle}
    myPhoto={myPhoto}
    variantSocial={heroSocial}
    variantP={heroParagraph}
    heroButtonText={t("hero-button-text")}
    paragraph={t("hero-paragraph")}/>, [t])

    return (
        <div className="Home">
            {heroMemoizeed}
        </div>
    )
})