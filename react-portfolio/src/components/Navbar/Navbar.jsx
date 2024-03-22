import React, {useState} from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils.js";
import ShimmerText from "../Shimmer/ShimmerText.jsx";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/"><ShimmerText>Portfolio</ShimmerText></a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                    menuOpen
                        ? getImageUrl("nav/closeIcon.png")
                        : getImageUrl("nav/menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}
                >
                    <li><a href="#about"><ShimmerText>About</ShimmerText></a></li>
                    <li><a href="#experience"><ShimmerText>Experience</ShimmerText></a></li>
                    <li><a href="#projects"><ShimmerText>Projects</ShimmerText></a></li>
                    <li><a href="#contact"><ShimmerText>Contact</ShimmerText></a></li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;