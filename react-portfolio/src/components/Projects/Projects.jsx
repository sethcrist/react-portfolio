import React from 'react';
import projects from "../../Data/projects.json"
import styles from "./Projects.module.css";
import ProjectCards from "./ProjectCards.jsx";


export const Projects = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return (
                        <ProjectCards key={id} project={project}/>
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;