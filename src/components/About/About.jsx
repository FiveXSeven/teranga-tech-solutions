import React from "react";
import "./About.css";
import { Link } from "react-scroll";
import aboutImg from "../../assets/images/about-service.png";

const About = () => {
    return (
        <section className="aboutSection" id="apropos">
            <div className="aboutBox">
                <div className="text">
                    <p>
                        {" "}
                        <strong>Téranga tech solution </strong> est une
                        entreprise numérique basée à{" "}
                        <strong>Dakar(Sénégal)</strong> regroupant des jeunes
                        passionnés de technologie. Nous offrons des services
                        assez diversifiés: <br /> Nous créons des{" "}
                        <strong>
                            sites web & des applications performants
                        </strong>
                        , réparons vos ordinateurs et offrons aussi des services
                        de
                        <strong> design web et d'infographie.</strong>
                        <br /> Faites de votre vision une expérience unique et
                        engageante.Découvrez nos services et propulsez votre
                        présence en ligne.
                    </p>
                    <a className="blueBtn" href="#">
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
                </div>
                <div className="image">
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default About;
