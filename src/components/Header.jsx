import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo">Trong Nguyen.</a>
      <div className="navbar-left">
        <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={toggleMenu}>Om Mig</a></li>
          <li><a href="#work" onClick={toggleMenu}>Projekter</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Kompetencer</a></li>
          <li><a href="#footer" onClick={toggleMenu}>Kontakt</a></li>
        </ul>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`burger ${isOpen ? 'toggle' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

