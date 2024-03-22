import React from 'react';
import skills from "../../Data/skills.json"
import history from "../../Data/history.json"
import styles from "./Experience.module.css"
import {getImageUrl} from "../../utils.js";
import ShimmerText from "../Shimmer/ShimmerText.jsx";


export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}><ShimmerText>Experience</ShimmerText></h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skills, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skills.imageSrc)} alt={skills.title}/>
                                </div>
                                <p>{skills.title}</p>
                            </div>
                        );
                    })}
                </div>
                <ul className={styles.history}>
                    {history.map((historyItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <img
                                    src={getImageUrl(historyItem.imageSrc)}
                                    alt={`${historyItem.organisation} Logo`}
                                />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experiences.map((experience, id) => {
                                            return <li key={id}>{experience}</li>
                                        })}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
export default Experience;