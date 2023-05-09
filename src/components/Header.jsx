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
import { linkSpanHeader, activeLinkSpanHeader } from "../motion variants/variants";
import { useLocation, useNavigate } from "react-router-dom";
import { Snack } from "./Snack";

export const Header = React.memo(() => {

    let dispatch = useDispatch();
    let {t} = useTranslation();
    let navigate = useNavigate();

    const links = useSelector(state => state.links.links);
    const languages = useSelector(state => state.languages.languages);
    const currentLanguage = useSelector(state => state.languages.currentLanguage);

    const [snakeState, setSnackState] = useState(false);
    const [snackType, setSnackType] = useState("");
    
    let location = useLocation();

    let activeLink = location.pathname;

    useEffect(() => {
        if(!links.length) dispatch(navLinksThunk);
    }, [links, dispatch]);

    useEffect(() => {
        if(!languages.length) dispatch(languagesThunk)
    }, [languages, dispatch]);

    const changeCurrentLanguageParent = useCallback((language) => {
        changeLanguage(language);
        dispatch(updateCurrentLanguage(language));
        setSnackState(true);
        setSnackType("language");
    }, [dispatch]);

    useEffect(() => {
        eventLoop.addListener("changeCurrentLanguage", changeCurrentLanguageParent);
        return () => {
            eventLoop.removeListener("changeCurrentLanguage", changeCurrentLanguageParent);
        }
    }, [changeCurrentLanguageParent]);


    const linksMemoizeed = useMemo(() => links.map(({id, link, key}) => <Link key={id} link={link} translateKey={key} setLanguage={t} variant={linkSpanHeader} activeLink={activeLink} activeVariant={activeLinkSpanHeader}/>), [links, t, activeLink]);
    const translateSelectMemoizeed = useMemo(() => <LanguageSelect key={1} languages={languages} content={t} currentLanguage={currentLanguage}/>, [languages, t, currentLanguage])

    return (
        <div className="HeaderContent">
            {translateSelectMemoizeed}
            <div className="HeaderLinks">
                {linksMemoizeed}
            </div>
            <h3 className="Logo" onClick={() => navigate('/')}>Aliaksei.dev</h3>
            <Snack open={snakeState} currentLanguage={currentLanguage} handleClose={() => setSnackState(false)} content={t} snackType={snackType}/>
        </div>
    )
})