import React from "react";

export const PersonalLink = React.memo(({image, href, alt, styles, display, margin}) => {
    return (
        <p style={display}>
            <a href={href}>
                <img src={image} alt={alt} style={styles}/>
            </a>
            <span style={{marginLeft: margin}}>{alt}</span>
        </p>
    )
})