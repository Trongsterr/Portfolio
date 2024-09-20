import React from 'react';
import nippon from '../assets/img/nippon.png';
import wertz from '../assets/img/wertz.png';
import mantra from '../assets/img/mantra.png';
import halong from '../assets/img/HaLong.png';
import steno from '../assets/img/steno.png';

const Work = () => {
  return (
    <>
      <section className="work-section">
        <h1 id="work">Mine Seneste Projekter</h1>
      </section>

      <section className="projects-grid">
        <div className="project-card">
          <a href="https://eaaa.deltabox.studio/nippon-maeltidskasser" target="_blank" rel="noopener noreferrer">
            <img src={nippon} alt="Projekt 1" />
            <p>Skole - Nippon</p>
          </a>
        </div>

        <div className="project-card">
          <a href="https://wertz.dk/" target="_blank" rel="noopener noreferrer">
            <img src={wertz} alt="Projekt 2" />
            <p>Designhuset Wertz</p>
          </a>
        </div>

        <div className="project-card">
          <a href="https://www.facebook.com/profile.php?id=61564476968076" target="_blank" rel="noopener noreferrer">
            <img src={mantra} alt="Projekt 3" />
            <p>Logo Design - Mantra</p>
          </a>
        </div>

        <div className="project-card">
          <a href="https://www.facebook.com/profile.php?id=61565286925049" target="_blank" rel="noopener noreferrer">
            <img src={halong} alt="Projekt 4" />
            <p>Logo Design - Ha Long</p>
          </a>
        </div>

        <div className="project-card">
          <a href="https://eaaa.deltabox.studio/steno-museet/web" target="_blank" rel="noopener noreferrer">
            <img src={steno} alt="Projekt 5" />
            <p>Skole - Steno Museet</p>
          </a>
        </div>
      </section>
    </>
  );
};
export default Work;
