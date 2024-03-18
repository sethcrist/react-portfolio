import React from 'react';
import styles from "./Hero.module.css"
import {getImageUrl} from "../../utils.js";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hello, I'm Seth</h1>
                <p className={styles.description}>I'm an Army veteran who is an aspiring full-stack developer. I'm learning and creating something new everyday so reach out
                if you'd like to learn more!
                </p>
                <a href="mailto:sethcrist50@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroimage.png")} alt="hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
}
export default Hero;