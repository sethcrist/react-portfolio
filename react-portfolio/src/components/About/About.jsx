import React from 'react';
import {getImageUrl} from "../../utils.js";
import styles from "./About.module.css"
export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/about.png")} alt="sitting with a laptop" className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I Utilize HTML, CSS, React and JavaScript to turn design concepts into interactive, visually appealing web pages that users can interact with. These web pages are reactive with different screen sizes.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have experience in Rails, leveraging APIs for seamless data interchange, managing databases with PostgreSQL, and adapting various development frameworks to engineer robust web solutions.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="ui icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>UI Developer</h3>
                            <p>I have collaborated with peers on designing and styling multiple websites HTML, CSS, and JavaScript frameworks to ensure that the interface is attractive and align with user expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;