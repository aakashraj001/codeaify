import React from 'react';
import './navbar.css'

const Navbar = ({ scrollToSection, aboutRef, servicesRef, contactRef }) => {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li onClick={() => scrollToSection(aboutRef)}>About Us</li>
          <li onClick={() => scrollToSection(servicesRef)}>Services</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
