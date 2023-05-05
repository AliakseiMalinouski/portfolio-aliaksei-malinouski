import React from "react";

export const Tech = React.memo(({tech, icon}) => {
    return (
        <li>
            {tech} <img src={icon} alt='Tech'/>
        </li>
    )
})