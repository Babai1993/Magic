import React from "react";
import "./Hero.css";
import heroImage from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>Transform Your Digital Presence</h1>
        <p>Innovative solutions for your business growth.</p>
        <button className="btn">Explore More</button>
      </div>
    </section>
  );
};

export default Hero;
