import React from "react";

export const IconLink = React.memo(({href, imageStyles, imageSrc, alt, margin}) => {
    return (
        <a href={href} target="_blank" rel="noreferrer" style={{marginRight: margin}}>
            <img src={imageSrc} alt={alt} style={imageStyles}/>
        </a>
    )
})