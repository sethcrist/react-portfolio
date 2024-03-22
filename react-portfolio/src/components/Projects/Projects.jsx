import React from 'react';
import projects from "../../Data/projects.json"
import styles from "./Projects.module.css";
import ProjectCards from "./ProjectCards.jsx";
import ShimmerText from "../Shimmer/ShimmerText.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
    };

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}><ShimmerText>Projects</ShimmerText></h2>
            <div className={styles.projects}>
                <Slider {...settings}>
                    {projects.map((project) => (
                        <ProjectCards key={project.id} project={project}/>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Projects;
