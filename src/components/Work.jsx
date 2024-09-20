import React from 'react';

const Work = () => {
  return (
    <>
      <section className="work-section">
        <h1 id="work">Mine Seneste Projekter</h1>
      </section>

      <section className="projects-grid">
        <div className="project-card">
          <a href="https://eaaa.deltabox.studio/nippon-maeltidskasser" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/img/nippon.png" alt="Projekt 1" />
            <p> Skole - Nippon</p>
          </a>
        </div>

        <div className="project-card">
          <a href="https://wertz.dk/" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/img/wertz.png" alt="Projekt 2" />
            <p>Designhuset Wertz</p>
          </a>
        </div>

        <div className="project-card">
          <a href="https://www.facebook.com/profile.php?id=61564476968076" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/img/mantra.png" alt="Projekt 3" />
            <p>Logo Design - Mantra</p>
          </a>
        </div>

        <div className="project-card">
          <a href="https://www.facebook.com/profile.php?id=61565286925049" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/img/HaLong.png" alt="Projekt 3" />
            <p>Logo Design - Ha Long</p>
          </a>
        </div>

        <div className="project-card">
          <a href="https://eaaa.deltabox.studio/steno-museet/web" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/img/steno.png" alt="Projekt 3" />
            <p>Skole - Steno Museet</p>
          </a>
        </div>
      </section>
    </>
  );
};
export default Work;

