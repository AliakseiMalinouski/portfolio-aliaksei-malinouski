import React from "react";
import {motion, AnimatePresence} from 'framer-motion';
import {eventLoop} from '../events';

export const LanguageSelect = React.memo(({languages, languagesState, content}) => {

    const changeCurrentLanguage = (language) => {
        eventLoop.emit("changeCurrentLanguage", language);
    }

    const changeLanguageState = () => {
        eventLoop.emit("changeLanguageState");
    }

    return (
        <AnimatePresence>
            {
                !languagesState
                ?
                <motion.div
                onClick={changeLanguageState}
                >
                    {content('language')}
                </motion.div>
                :
                <motion.ul>
                    <li onClick={changeLanguageState}>{content('language')}</li>
                    {
                        languages.map(({id, language}) => <li key={id} 
                        onClick={() => changeCurrentLanguage(language)}
                        >
                            {language}
                        </li>)
                    }
                </motion.ul>
            }
        </AnimatePresence>
    )
})