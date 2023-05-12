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
import { Drawer } from "@mui/material";

export const Header = React.memo(() => {

    let dispatch = useDispatch();
    let {t} = useTranslation();
    let navigate = useNavigate();

    const links = useSelector(state => state.links.links);
    const languages = useSelector(state => state.languages.languages);
    const currentLanguage = useSelector(state => state.languages.currentLanguage);

    const [snakeState, setSnackState] = useState(false);
    const [snackType, setSnackType] = useState("");
    const [headerState, setHeaderState] = useState(false);
    const [drawerState, setDrawerState] = useState(false);
    
    let location = useLocation();

    let activeLink = location.pathname;

    useEffect(() => {
        if(!links.length) dispatch(navLinksThunk);
    }, [links, dispatch]);

    useEffect(() => {
        if(!languages.length) dispatch(languagesThunk)
    }, [languages, dispatch]);

    useEffect(() => {
        let windowWidth = window.matchMedia('(max-width: 720px)');
        if(windowWidth.matches) setHeaderState(true);
    }, []);

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


    const linksMemoizeed = useMemo(() => links.map(({id, link, key}) => <Link key={id} link={link} translateKey={key} setLanguage={t} variant={linkSpanHeader} activeLink={activeLink} activeVariant={activeLinkSpanHeader} headerState={headerState}/>), [links, t, activeLink, headerState]);
    const translateSelectMemoizeed = useMemo(() => <LanguageSelect key={1} languages={languages} content={t} currentLanguage={currentLanguage}/>, [languages, t, currentLanguage])

    return (
        <div className="HeaderContent" style={{justifyContent: headerState ? 'space-between' : ""}}>
            {translateSelectMemoizeed}
            {
                !headerState
                ?
                <>
                <div className="HeaderLinks">
                    {linksMemoizeed}
                </div>
                <h3 className="Logo" onClick={() => navigate('/')}>Aliaksei.dev</h3>
                </>
            :
            <img src="https://i.ibb.co/Krrtb7x/menu.png" alt="Menu" className="MenuButtonHeader"
            onClick={() => {
                setDrawerState(true);
            }}
            />
            }
            {
                <Drawer anchor="left" open={drawerState} onClose={() => setDrawerState(false)}>
                    <div style={{
                        width: window.screen.width / 2,
                        padding: '20px'
                        }} className="WrapperDrawerContent">
                        <h3 className="Logo" onClick={() => navigate('/')}
                        style={{
                            marginBottom: '20px'
                        }}
                        >Aliaksei.dev</h3>
                        <div className="HeaderLinks">
                            {linksMemoizeed}
                        </div>
                        <div style={{
                            marginTop: '30px'
                        }}>
                        <a href="https://www.linkedin.com/in/aliaksei-malinouski-a44778249/" target="_blank" rel="noreferrer" style={{marginRight: '12px'}}>
                            <img src="https://i.ibb.co/JdPdMNy/linkedin-2.png" alt='Linkedin'
                            style={{width: '30px', heigth: '30px'}}
                            />
                        </a>
                        <a href="https://github.com/AliakseiMalinouski" target="_blank" rel="noreferrer" style={{marginRight: '12px'}}>
                            <img src="https://i.ibb.co/MgRCGH0/icons8-github-50.png" alt="GitHub"
                            style={{width: '30px', heigth: '30px'}}
                            />
                        </a>
                        <a href="mailto:aleksymalinowski21@gmail.com" target="_blank" rel="noreferrer" style={{marginRight: '12px'}}>
                            <img src="https://i.ibb.co/CvNh5M4/email-1.png" alt="GitHub"
                            style={{width: '30px', heigth: '30px'}}
                            />
                        </a>
                        </div>
                        <div>
                        <p>
                            <img src="https://i.ibb.co/YttZ8Xh/telegram.png" alt="Telegram"/>
                            <span>@aleksymalinowski</span>
                        </p>
                        <p>
                            <img src="https://i.ibb.co/R26DFFR/instagram.png" alt="Telegram"/>
                            <span>aleksymalinowski_</span>
                        </p>
                        </div>
                    </div>
                </Drawer>
            }
            <Snack open={snakeState} currentLanguage={currentLanguage} handleClose={() => setSnackState(false)} content={t} snackType={snackType}/>
        </div>
    )
})