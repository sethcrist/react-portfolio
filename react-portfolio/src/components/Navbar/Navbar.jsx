import React, {useState} from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils.js";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
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
                <ul className={`${styles.menuItems} $${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}
                >
                    <li><a href="#about"></a>About</li>
                    <li><a href="#experience"></a>Experience</li>
                    <li><a href="#projects"></a>Projects</li>
                    <li><a href="#contact"></a>Contact</li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;