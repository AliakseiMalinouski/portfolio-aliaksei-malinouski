import React from "react";
import {eventLoop} from '../events';
import { motion } from "framer-motion";
import { chosenCertificateVariant, defaultCertificateVariant } from "../motion variants/variants";

export const Certificate = React.memo(({id, image, link, alt, content, custom, certificate, current}) => {

    let stylesForDefaultBlock = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "100% 100%"
    }

    let stylesForChosenBlock = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "100% 100%",
        opacity: '0.5'
    }

    const viewCertificate = () => {
        eventLoop.emit("viewCertificate", certificate);
    }

    if(certificate === current) {
        return (
            <motion.div className="Certificate" style={stylesForChosenBlock} variants={chosenCertificateVariant} 
            initial={'hidden'}
            animate={'visible'}
            >
            </motion.div>
        )
    }
    else {
        return (
            <motion.div className="Certificate" style={stylesForDefaultBlock} onClick={viewCertificate} variants={defaultCertificateVariant} 
            initial={'hidden'}
            whileInView={'visible'}
            custom={custom}
            viewport={{once: true, amount: 0.5}}
            >
            </motion.div>
        )
    }
})