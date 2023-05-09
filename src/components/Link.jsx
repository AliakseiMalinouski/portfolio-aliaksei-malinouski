import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


export const Link = React.memo(({link, translateKey, setLanguage, variant, activeLink, activeVariant}) => {
    if(activeLink === link) {
        return (
            <motion.div
            whileHover={{
                scale: 1.08,
                transition: {
                    duration: 0.3
                }
            }}>
                <NavLink to={link}>
                    <motion.span
                    initial={'hidden'}
                    animate={'visible'}
                    variants={activeVariant}
                    whileHover={'hover'}
                    >
                        {setLanguage(`${translateKey}`)}
                    </motion.span>
                </NavLink>
            </motion.div>
        )
    }
    else {
        return (
            <motion.div
            whileHover={{
                scale: 1.08,
                transition: {
                    duration: 0.3
                }
            }}>
                <NavLink to={link}>
                    <motion.span
                    initial={'hidden'}
                    animate={'visible'}
                    variants={variant}
                    whileHover={'hover'}
                    >
                        {setLanguage(`${translateKey}`)}
                    </motion.span>
                </NavLink>
            </motion.div>
        )
    }
});