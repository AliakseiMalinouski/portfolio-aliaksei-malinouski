import React from "react";

export const PersonalLink = React.memo(({image, href, alt, styles, display, margin}) => {
    return (
        <a href={href} style={display}>
            <img src={image} alt={alt} style={styles}/>
            <span style={{marginLeft: margin}}>{alt}</span>
        </a>
    )
})