import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Footer = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText('trongvan@hotmail.com');
    alert('E-mailadresse kopieret til udklipsholderen!');
  };

  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p onClick={copyEmail} style={{ cursor: 'pointer', color: 'black', display: 'flex', alignItems: 'center' }}>
            <FaEnvelope size={20} style={{ marginRight: '8px' }} /> Kontakt mig: trongvan@hotmail.com
          </p>
          <a href="https://turquoise-lotty-15.tiiny.site" download style={{ color: 'black', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <FaFileDownload size={20} style={{ marginRight: '8px' }} /> Download CV
          </a>
        </div>
        <div className="footer-right">
          <p>Følg mig på de sociale medier</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/trongvnguyen/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={50} />
            </a>
            <a href="https://www.linkedin.com/in/trong-nguyen-763261191/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={50} />
            </a>
            <a href="https://github.com/Trongsterr" target="_blank" rel="noopener noreferrer">
              <FaGithub size={50} />
            </a>
          </div>
        </div>
      </div>
      <p>© 2024 Trong Van Nguyen</p>
    </footer>
  );
}

export default Footer;
