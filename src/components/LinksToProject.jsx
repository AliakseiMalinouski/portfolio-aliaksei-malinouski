import React from "react";

export const LinksToProject = React.memo(({github, vercel}) => {
    return (
        <ul className="SocialLinks">
            <li>
                <a href={vercel} target="_blank" rel="noreferrer">
                    Deploy
                </a>
                <img src="https://i.ibb.co/fnL9s0W/project-launch.png" alt="Deploy"/>
            </li>
            <li>
                <a href={github} target="_blank" rel="noreferrer">
                    GitHub
                </a>
                <img src="https://img.icons8.com/?size=512&id=12599&format=png" alt="GitHub"/>
            </li>
        </ul>
    )
})