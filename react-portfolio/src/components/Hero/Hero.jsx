import React from 'react';
import styles from "./Hero.module.css"
import {getImageUrl} from "../../utils.js";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hello, I'm Seth</h1>
                <p className={styles.description}>Army veteran turned full-stack software developer. My journey into the world of coding started with a fascination for creating something out of nothing. The thrill of solving complex problems and bringing my ideas to life through code has been my driving force. I'm eager to bring my passion for coding and full-stack development to new and challenging projects. Let's create something innovative together.
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