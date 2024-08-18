import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="heroBox" id="hero">
            <div className="container">
                <h1 className="h1">
                    Transformez vos idées en <br /> Réalité Numérique
                </h1>
                <h2 className="h2">
                    <strong>Téranga Tech Solution</strong> est une entreprise
                    basée à <strong>Dakar-Sénégal</strong> et qui est
                    specialisée dans la création de Sites web{" "}
                    <strong> modernes</strong> et d'applications
                    <strong> web & mobile</strong>.
                </h2>

                <div className="heroBtn">
                    <a>
                        <Link
                            className="blueBtn"
                            to="service"
                            smooth={true}
                            offset={-132}
                            duration={500}
                        >
                            NOS SERVICES
                        </Link>
                    </a>
                    <a className="btn">
                        <Link
                            to="apropos"
                            smooth={true}
                            offset={-132}
                            duration={500}
                        >
                            QUI SOMMES NOUS ?
                        </Link>
                    </a>
                </div>

                <Link to="service" smooth={true} offset={-132} duration={500}>
                    <FontAwesomeIcon className="icon" icon={faArrowDown} />
                </Link>
            </div>
        </section>
    );
};

export default Hero;
