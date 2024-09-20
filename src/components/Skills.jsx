import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faHtml5, faCss3Alt, faGithub, faWordpress} from '@fortawesome/free-brands-svg-icons';


const skills = [
  { icon: faReact, name: 'React.js' },
  { icon: faJsSquare, name: 'JavaScript' },
  { icon: faHtml5, name: 'HTML' },
  { icon: faCss3Alt, name: 'CSS' },
  { icon: faWordpress, name: 'WordPress' },
  { icon: faGithub, name: 'GitHub' },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 id="skills">Mine Kompetencer</h2>
      <div className="carousel">
      <div className="carousel-track">
  {skills.map((skill, index) => (
    <div key={index} className="skill-item">
      <FontAwesomeIcon icon={skill.icon} size="4x" />
      <p>{skill.name}</p>
    </div>
  ))}
    {skills.map((skill, index) => (
    <div key={index + skills.length} className="skill-item">
      <FontAwesomeIcon icon={skill.icon} size="4x" />
      <p>{skill.name}</p>
    </div>
    ))}
  </div>
      </div>
    </section>
  );
};

export default Skills;
