import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./Contact.css";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contactPart">
                    <h2>Contactez nous</h2>
                    <div className="iconContact">
                        <div>
                            <a href="mailto:terangatechsolution@gmail.com">
                                <FontAwesomeIcon
                                    className="iconcontact"
                                    icon={faEnvelope}
                                />
                            </a>
                        </div>
                        <div>
                            <a href="tel:+221782340482">
                                <FontAwesomeIcon
                                    className="iconcontact"
                                    icon={faPhone}
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="followPart">
                    <h2>Suivez nous</h2>
                    <div className="social">
                        <div>
                            <FontAwesomeIcon
                                className="socialIcon"
                                icon={faFacebook}
                            />
                        </div>
                        <div>
                            <FontAwesomeIcon
                                className="socialIcon"
                                icon={faInstagram}
                            />
                        </div>
                        <div>
                            <FontAwesomeIcon
                                className="socialIcon"
                                icon={faLinkedin}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
