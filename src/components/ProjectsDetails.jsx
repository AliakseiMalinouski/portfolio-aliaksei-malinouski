import React from "react";
import { useParams } from "react-router-dom";

export const ProjectsDetails = React.memo(() => {

    let params = useParams();

    let projectType = params.projectname;

    return (
        <div>
            {projectType}
        </div>
    )
})