import React from 'react';
import {getImageUrl} from "../../utils.js";
import styles from "./Contact.module.css"
export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Lets create something!</p>
                <p><a href="https://www.youtube.com/@Code_Complete" target="_blank">Made with Code Complete</a></p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
                    <a href="mailto:sethcrist50@gmail.com">sethcrist50@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
                    <a href="https://www.github.com/sethcrist" target="_blank">Check out my GitHub</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
                    <a href="https://www.linkedin.com/in/seth-crist" target="_blank">Lets connect on Linkedin</a>
                </li>
            </ul>
        </footer>
    );
}

export default Contact;