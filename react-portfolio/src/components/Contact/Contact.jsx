import React from 'react';
import {getImageUrl} from "../../utils.js";
import styles from "./Contact.module.css"
export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Lets create something!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
                    <a href="mailto:sethcrist50@gmail.com">Email me @ sethcrist50@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
                    <a href="https://www.github.com/sethcrist">Check out my GitHub</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
                    <a href="https://www.linkedin.com/in/seth-crist">Lets connect on Linkedin</a>
                </li>
            </ul>
        </footer>
    );
}

export default Contact;