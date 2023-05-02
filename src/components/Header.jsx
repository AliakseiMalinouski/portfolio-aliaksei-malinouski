import React from "react";
import { useEffect, useMemo,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import {navLinksThunk} from '../Redux/Header/navLinksThunk';
import { Link } from "./Link";
import {motion} from 'framer-motion';
import { LanguageSelect } from "./LanguageSelect";
import { languagesThunk } from "../Redux/Header/languagesThunk";
import { eventLoop } from "../events";
import {changeLanguage} from 'i18next';


export const Header = React.memo(() => {

    let dispatch = useDispatch();
    let {t} = useTranslation();

    const [languagesState, setLanguagesState] = useState(false);

    const links = useSelector(state => state.links.links);
    const languages = useSelector(state => state.languages.languages);

    useEffect(() => {
        if(!links.length) dispatch(navLinksThunk);
    }, [links, dispatch]);

    useEffect(() => {
        if(!languages.length) dispatch(languagesThunk)
    }, [languages, dispatch]);

    useEffect(() => {
        eventLoop.addListener("changeCurrentLanguage", changeCurrentLanguageParent);
        eventLoop.addListener("changeLanguageState", changeLanguageStateParent);
        return () => {
            eventLoop.removeListener("changeCurrentLanguage", changeCurrentLanguageParent);
            eventLoop.removeListener("changeLanguageState", changeLanguageStateParent);
        }
    }, []);

    const changeCurrentLanguageParent = (language) => {
        console.log(language)
        changeLanguage(language);
    }

    const changeLanguageStateParent = () => setLanguagesState(prev => !prev);

    const linksMemoizeed = useMemo(() => links.map(({id, link, key}) => <Link key={id} link={link} translateKey={key} setLanguage={t}/>), [links, t]);
    const translateSelectMemoizeed = useMemo(() => <LanguageSelect key={1} languages={languages} languagesState={languagesState} content={t}/>, [languages, languagesState, t])

    return (
        <div className="HeaderContent">
            <motion.div
            >
                {linksMemoizeed}
            </motion.div>
            {translateSelectMemoizeed}
        </div>
    )
})