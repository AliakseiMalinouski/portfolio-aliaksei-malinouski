import React from "react";

export const Title = React.memo(({tag, text, content}) => {
    const Tag = tag || 'h2';
    return (
        <Tag>
            {content(`${text}`)}
        </Tag>
    )
})