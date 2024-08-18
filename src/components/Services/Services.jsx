import React from "react";
import "./Services.css";
import serviceImg1 from "../../assets/images/mobile-service.png";
import serviceImg2 from "../../assets/images/design service.png";
import serviceImg3 from "../../assets/images/course-service.png";
import serviceImg4 from "../../assets/images/maintenance-service.png";
import serviceImg5 from "../../assets/images/dev-service.png";

const Services = () => {
    return (
        <section className="serviceSection" id="service">
            <div className="serviceBox">
                <div className="col_left">
                    <div className="row">
                        <img src={serviceImg1} alt="" />
                        <div className="caption">
                            <p>Développement d'applications</p>
                        </div>
                    </div>
                    <div className="row">
                        <img src={serviceImg2} alt="" />
                        <div className="caption">
                            <p>Design et Infographie</p>
                        </div>
                    </div>
                    <div className="row">
                        <img src={serviceImg3} alt="" />
                        <div className="caption">
                            <p>Formation informatique</p>
                        </div>
                    </div>
                </div>
                <div className="col_right">
                    <div className="row">
                        <img src={serviceImg5} />
                        <div className="caption">
                            <p>Développement de sites webs</p>
                        </div>
                    </div>
                    <div className="row">
                        <img src={serviceImg4} />
                        <div className="caption">
                            <p>Maintenance et réparation d'ordinateurs</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
