import React from 'react';
import {getImageUrl} from "../../utils.js";

export const About = () => {
    return (
        <section>
            <h2>About</h2>
            <div>
                <img src={getImageUrl("about/about.png")} alt="sitting with a laptop"/>
            </div>
        </section>
    );
}

export default About;