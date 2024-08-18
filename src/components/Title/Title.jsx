import React from "react";
import "./Title.css";

const Title = ({ title }) => {
    return (
        <div className="titre">
            <h3> {title} </h3>
        </div>
    );
};

export default Title;
