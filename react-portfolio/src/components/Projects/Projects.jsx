import React from 'react';
import projects from "../../Data/projects.json"
import styles from "./Projects.module.css";
import ProjectCards from "./ProjectCards.jsx";
import ShimmerText from "../Shimmer/ShimmerText.jsx";


export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}><ShimmerText>Projects</ShimmerText></h2>
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