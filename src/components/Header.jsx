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
import { iconsLinkThunk } from "../Redux/Contact/iconsLinkThunk";
import { IconLink } from "./IconLink";
import { PersonalLink } from "./PersonalLink";

export const Header = React.memo(() => {

    let dispatch = useDispatch();
    let {t} = useTranslation();
    let navigate = useNavigate();

    const links = useSelector(state => state.links.links);
    const languages = useSelector(state => state.languages.languages);
    const currentLanguage = useSelector(state => state.languages.currentLanguage);
    const iconsLink = useSelector(state => state.iconsLink.iconsLink);
    const iconsLinkLoadState = useSelector(state => state.iconsLink.loadState);

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
        if(!iconsLinkLoadState) dispatch(iconsLinkThunk);
    }, [iconsLinkLoadState, dispatch])

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
    const translateSelectMemoizeed = useMemo(() => <LanguageSelect key={1} languages={languages} content={t} currentLanguage={currentLanguage}/>, [languages, t, currentLanguage]);
    const developerSocialNetworkMemoizeed = useMemo(() => iconsLink && iconsLink?.developer?.content?.map(({id, href, image, styles, alt, margin}) =>  <IconLink 
    key={id}
    href={href}
    imageSrc={image}
    imageStyles={styles}
    margin={margin}
    alt={alt}
    />), [iconsLink]);

    const personalSocialNetworksMemoizeed = useMemo(() => iconsLink && iconsLink?.personal?.content?.map(({id, image, href, styles, alt, display, margin}) => <PersonalLink
    key={id}
    image={image}
    href={href}
    styles={styles}
    alt={alt}
    display={display}
    margin={margin}
    />), [iconsLink]);

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
                        {developerSocialNetworkMemoizeed}
                        </div>
                        <div style={{
                            marginTop: '30px'
                        }}>
                            {personalSocialNetworksMemoizeed}
                        </div>
                    </div>
                </Drawer>
            }
            <Snack open={snakeState} currentLanguage={currentLanguage} handleClose={() => setSnackState(false)} content={t} snackType={snackType}/>
        </div>
    )
})