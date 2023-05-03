import React from "react";
import { motion } from "framer-motion";
import { transformString } from "../helpers/transformString";

export const Hero = React.memo(({variantTitle, paragraph, variantP, variantSocial, myPhoto}) => {

    let newParagraph = transformString('divide', paragraph);
    console.log(newParagraph)

    return (
        <div className="Hero">
            <div>
                <motion.h1
                initial={'hidden'}
                animate={'visible'}
                variants={variantTitle}
                custom={0.2}
                >
                    Front-End React <br/> Developer
                </motion.h1>
                <motion.p
                initial={'hidden'}
                animate={'visible'}
                variants={variantP}
                custom={0.4}
                >
                    { newParagraph.middleString } <br/> { newParagraph.afterMiddleString } <img src="https://i.ibb.co/0KngG4N/placeholder.png" className="LocateIcon" alt="Locate"/>
                </motion.p>
                <motion.div className="SocialNetworks"
                initial={'hidden'}
                animate={'visible'}
                custom={0.6}
                variants={variantSocial}
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
                </motion.div>
            </div>
            <motion.img
            initial={'hidden'}
            animate={'visible'}
            variants={myPhoto}
            className="MyPhoto" src="https://i.ibb.co/zmWSvn5/1706-oooo-plus.png" alt="Me"/>
        </div>
    )
})