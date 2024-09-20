import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="text-container">
        <h2 className="about-me">Om Mig</h2>
        <p>
        Jeg studerer Multimediedesign på Erhvervsakademi Aarhus (EAAA) og er i øjeblikket
         i gang med mit tredje semester, hvor jeg fokuserer på front-end udvikling. Jeg
          arbejder med værktøjer som React.js, JavaScript samt grundlæggende HTML og CSS.</p>

        <p>Udover mine studier driver jeg min egen virksomhed, hvor jeg udforsker forskellige 
        webteknologier og opbygger erfaring inden for front-end udvikling. 
        Jeg har også praktisk erfaring med Figma, WordPress og Adobe Creative Cloud.</p>

        <p>På det personlige plan holder jeg mig aktiv med fitness, løb og tennis. 
       Med støtte fra mine nærmeste stræber jeg efter at blive en komplet front-end developer.</p>

        <p>Tak for din interesse i min profil. Jeg ser frem til at skabe forbindelser og udveksle erfaringer!</p>
    </div>
      <div className="image-container">
        <img src="src/assets/img/mig.png" alt="Billede af mig" />
      </div>
    </section>
  );
}

export default About;
