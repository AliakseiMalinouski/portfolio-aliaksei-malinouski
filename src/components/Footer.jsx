import React from "react";
import {Link} from './Link';
import { useMemo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { navLinksThunk } from "../Redux/Header/navLinksThunk";
import { linkSpanHeader, activeLinkSpanHeader } from "../motion variants/variants";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";


export const Footer = React.memo(() => {

    let dispatch = useDispatch();

    let {t} = useTranslation();

    let location = useLocation();

    let activeLink = location.pathname;

    const links = useSelector(state => state.links.links);

    const [myMobilePhotoState, setMyMobilePhotoState] = useState(false);

    const [isTransform, setTransform] = useState(false);

    useEffect(() => {
        if(!links.length) dispatch(navLinksThunk);
    }, [links, dispatch]);

    useEffect(() => {
        let windowWidth720 = window.matchMedia("(max-width: 720px)");
        if(windowWidth720.matches) setMyMobilePhotoState(true);
    }, []);

    useEffect(() => {setTransform(true)}, []);

    const linksMemoizeed = useMemo(() => links.map(({id, link, key}) => <Link key={id} link={link} translateKey={key} setLanguage={t} variant={linkSpanHeader} activeLink={activeLink} activeVariant={activeLinkSpanHeader} isTransform={isTransform}/>), [links, t, activeLink, isTransform]);

    return (
        <div className="FooterContent" style={{
            justifyContent: myMobilePhotoState ? 'space-evenly' : "space-between"
        }}>
            {
                myMobilePhotoState
                ?
                null
                :
                <img src="https://i.ibb.co/zmWSvn5/1706-oooo-plus.png" alt="Avatar" className="AvatarFooter"/>
            }
            <div className="LinksFooter">
                {linksMemoizeed}
            </div>
            {
                myMobilePhotoState
                ?
                null
                :
                <div className="OtherSocialNetworks">
                    <p>
                        <img src="https://i.ibb.co/YttZ8Xh/telegram.png" alt="Telegram"/>
                        <span>@aleksymalinowski</span>
                    </p>
                    <p>
                        <img src="https://i.ibb.co/R26DFFR/instagram.png" alt="Telegram"/>
                        <span>aleksymalinowski_</span>
                    </p>
                </div>
            }
            <motion.div className="SocialNetworksFooter" initial={{
                opacity: 0
            }} whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 0.8
            }}
            viewport={{once: true, amount: 0.3}}
                >
                    <motion.a href="https://www.linkedin.com/in/aliaksei-malinouski-a44778249/" target="_blank">
                    <img src="https://i.ibb.co/JdPdMNy/linkedin-2.png" alt='Linkedin'
                    style={{width: '30px', heigth: '30px'}}
                    />
                    </motion.a>
                    <motion.a href="https://github.com/AliakseiMalinouski" target="_blank">
                    <img src="https://i.ibb.co/MgRCGH0/icons8-github-50.png" alt="GitHub"
                    style={{width: '30px', heigth: '30px'}}
                    />
                    </motion.a>
                    <motion.a href="mailto:aleksymalinowski21@gmail.com" target="_blank">
                    <img src="https://i.ibb.co/CvNh5M4/email-1.png" alt="GitHub"
                    style={{width: '30px', heigth: '30px'}}
                    />
                    </motion.a>
                </motion.div>
        </div>
    )
})