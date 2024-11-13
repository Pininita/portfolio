import React from "react";

export function Projects(props) {
    return (
        <>
            <section id="projects" className="projects">
                <div className="project-list">
                    <a className="project-card" href={props.link} target="_blank" rel="noopener noreferrer">
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        <img src={props.image} alt="project-url"/>
                    </a>
                </div>
            </section>
        </>
    )
}