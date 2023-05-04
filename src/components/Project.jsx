import React from "react";

export const Project = React.memo(({id, apis, deploy, full, github, short, image, packages, read, stack, title, type, content}) => {
    return (
        <div className="Project">
            {content(`${title}`)}
        </div>
    )
})