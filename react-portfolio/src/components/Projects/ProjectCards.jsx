import React from 'react';
import {getImageUrl} from "../../utils.js";
import styles from "./ProjectCards.module.css"
export const ProjectCards = ({ project }) => {
    const {title, image, description, skills, demo, source} = project;
    return (
        <div className={styles.container}>
            <img src={getImageUrl(image)}
                 alt={`Image of ${title}`}
                 className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, skillId) => {
                    return <li key={skillId} className={styles.skill}>
                                {skill}
                           </li>
                })}
            </ul>
            <div className={styles.links}>
                <a href={demo} className={styles.link} target="_blank">Demo</a>
                <a href={source} className={styles.link} target="_blank">Source</a>
            </div>
        </div>
    );
}

export default ProjectCards;