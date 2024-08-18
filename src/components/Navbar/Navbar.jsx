import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logoTTS from "../../assets/images/logo_teranga_tech_solution_blancc.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Add icons for menu

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="nav">
            <div className="navContainer">
                <a href="#">
                    <img className="logo" src={logoTTS} alt="site_logo" />
                </a>

                <div className="menu-icon" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                    <li>
                        <Link
                            to="hero"
                            smooth={true}
                            offset={0}
                            duration={500}
                            onClick={closeMenu}
                        >
                            ACCUEIL
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="apropos"
                            smooth={true}
                            offset={-132}
                            duration={500}
                            onClick={closeMenu}
                        >
                            A PROPOS
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="service"
                            smooth={true}
                            offset={-140}
                            duration={500}
                            onClick={closeMenu}
                        >
                            SERVICES
                        </Link>
                    </li>
                    <li className="blueBtn">
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            onClick={closeMenu}
                        >
                            CONTACTEZ NOUS
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
