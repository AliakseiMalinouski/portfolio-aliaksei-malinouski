import React from "react";

export const Api = React.memo(({link, name}) => {
    return (
        <li>
           <a href={link}>{name}</a> 
        </li>
    )
})