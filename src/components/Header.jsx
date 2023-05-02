import React, { useCallback } from "react";
import { useEffect, useMemo,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import {navLinksThunk} from '../Redux/Header/navLinksThunk';
import { Link } from "./Link";
import { LanguageSelect } from "./LanguageSelect";
import { languagesThunk } from "../Redux/Header/languagesThunk";
import { eventLoop } from "../events";
import {changeLanguage} from 'i18next';
import { updateCurrentLanguage } from "../Redux/Header/languagesSlice";

export const Header = React.memo(() => {

    let dispatch = useDispatch();
    let {t} = useTranslation();


    const links = useSelector(state => state.links.links);
    const languages = useSelector(state => state.languages.languages);
    const currentLanguage = useSelector(state => state.languages.currentLanguage);

    useEffect(() => {
        if(!links.length) dispatch(navLinksThunk);
    }, [links, dispatch]);

    useEffect(() => {
        if(!languages.length) dispatch(languagesThunk)
    }, [languages, dispatch]);

    const changeCurrentLanguageParent = useCallback((language) => {
        changeLanguage(language);
        dispatch(updateCurrentLanguage(language));
    }, [dispatch]);

    useEffect(() => {
        eventLoop.addListener("changeCurrentLanguage", changeCurrentLanguageParent);
        return () => {
            eventLoop.removeListener("changeCurrentLanguage", changeCurrentLanguageParent);
        }
    }, [changeCurrentLanguageParent]);


    const linksMemoizeed = useMemo(() => links.map(({id, link, key}) => <Link key={id} link={link} translateKey={key} setLanguage={t}/>), [links, t]);
    const translateSelectMemoizeed = useMemo(() => <LanguageSelect key={1} languages={languages} content={t} currentLanguage={currentLanguage}/>, [languages, t, currentLanguage])

    return (
        <div className="HeaderContent">
            <div className="HeaderLinks">
                {linksMemoizeed}
            </div>
            {translateSelectMemoizeed}
        </div>
    )
})