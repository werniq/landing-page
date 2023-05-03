import React from "react";
import "./Hero.css";

const Hero = ({imageSrc}) => {
    return (
        <div className="hero">
            <img src={imageSrc} alt="travel" className="hero__img" />
            <h1 className="hero__title">Travel made simple.</h1>
        </div>
    )
}

export default Hero;