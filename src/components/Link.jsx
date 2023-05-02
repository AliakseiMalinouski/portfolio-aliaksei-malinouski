import React from "react";
import { NavLink } from "react-router-dom";

export const Link = React.memo(({link, translateKey, setLanguage}) => {
    return (
        <NavLink to={link}>
            {
                setLanguage(`${translateKey}`)
            }
        </NavLink>
    )
})