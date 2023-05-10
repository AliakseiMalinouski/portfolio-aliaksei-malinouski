import React, { useCallback } from "react";
import { useEffect, useMemo, useState } from "react";
import { Title } from "./Title";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { techStackThunk } from "../Redux/About/techStackThunk";
import { Tech } from "./Tech";
import { useLocation } from "react-router-dom";
import { techStackTitleVariant, largeParagraphAboutMeVariant, activeCertificateVariant } from "../motion variants/variants";
import { motion } from "framer-motion";
import { certificatesThunk } from "../Redux/About/certificatesThunk";
import { Certificate } from "./Certificate";
import { eventLoop } from "../events";
import { useRef } from "react";
import { scrollToElement } from "../helpers/scrollToElement";

export const About = React.memo(() => {

    let {t} = useTranslation();

    let dispatch = useDispatch();

    let location = useLocation();

    let scrolledElem = useRef();

    const stackOfTech = useSelector(state => state.stack.stack);
    const certificates = useSelector(state => state.certificates.certificates);

    const [currentCertificate, setCurrentSertificate] = useState({});

    useEffect(() => {
        if(!certificates.length) dispatch(certificatesThunk);
    }, [dispatch, certificates]);

    useEffect(() => {
        if(!stackOfTech.length) dispatch(techStackThunk);
    }, [dispatch, stackOfTech]);

    const viewCertificateParent = useCallback((key) => {
        if(key) {
            let currentCertificateInArray = certificates.find(elem => elem.certificate === key);
            setCurrentSertificate(currentCertificateInArray);
            if(!scrolledElem.current) {
                scrollToElement("window", null);
            }
            else {
                scrollToElement("element", scrolledElem.current);
            }
        }
    }, [certificates]);

    useEffect(() => {
        eventLoop.addListener("viewCertificate", viewCertificateParent);
        return () => {
            eventLoop.removeListener("viewCertificate", viewCertificateParent);
        }
    }, [viewCertificateParent]);

    let techMemoizeed = useMemo(() => stackOfTech && stackOfTech?.map((elem, index) => <Tech key={elem.id} custom={index} tech={location.pathname === '/' || location.pathname === '/about' ? "" : elem.tech} icon={elem.icon} location={location.pathname === '/' ? location.pathname : ""}/>), [stackOfTech, location])

    let certificatesMemoizeed = useMemo(() => certificates && certificates?.map((elem, index) => <Certificate key={elem.id} image={elem.image} link={elem.link} alt={elem.alt} content={t} custom={index} certificate={elem.certificate} current={currentCertificate.certificate}/>), [certificates, t, currentCertificate]);

    return (
        <>
            <div className="About">
            <Title tag='h2' text="about-me" content={t}/>
            <div className="FlexGroup">
                <motion.h4 variants={techStackTitleVariant} initial={'hidden'} animate={'visible'}>{t('my-tech-stack')}</motion.h4>
                <ul className="StackOfTech">
                    {techMemoizeed}
                </ul>
            </div>
            <div className="MoreAboutMe">
                <motion.p variants={largeParagraphAboutMeVariant} initial={'hidden'} animate={'visible'}>
                    {t("all-info-about-me")}   
                </motion.p>
            </div>
            <div className="Certificates">
                <Title tag="h2" text="cerfiticates-title" content={t}/>
                <div className="FlexGroup">
                    {certificatesMemoizeed}
                </div>
                    {
                        currentCertificate.image === undefined || currentCertificate.image === null || currentCertificate === ""
                        ?
                        null
                        :
                        <motion.div className="CurrentCertificate" ref={scrolledElem}
                        variants={activeCertificateVariant}
                        initial={'hidden'}
                        animate={'visible'}
                        style={{
                            backgroundImage: `url(${currentCertificate.image})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '100% 100%'
                        }}
                        >
                        </motion.div>
                    }
            </div>
        </div>
        <div></div>
        </>
    )
})