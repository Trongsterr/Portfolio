import React from 'react';
import HeroSectionimg from "../assets/img/Mig.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-image">
          <img src={HeroSectionimg} alt="Mit billede" />
        </div>
        <div className="hero-content">
          <h1>Digital Designer & Web udvikler</h1>
          <p>"Jeg er en Front-end studerende på Erhvervsakadamiet Århus som søger en praktikplads hos jer!"</p>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;

