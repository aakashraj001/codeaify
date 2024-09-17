import React from 'react';
import './navbar.css'
import logo from '../../../assets/images/logo.png'

const Navbar = ({ scrollToSection, aboutRef, servicesRef, contactRef, homeRef,featuresRef }) => {
  return (
    <header id="header" className="bg-white fixed w-full z-50 shadow-on-scroll">
      <nav className="flex flex-row items-center justify-between mx-auto h-[12vh] w-[70vw]">
        <div className="flex items-center justify-start gap-8">
          <img
            className="w-[15vw] h-[10vh] flex object-contain"
            src={logo}
            aria-label="Logo"
          />
          <NavMenu scrollToSection={scrollToSection} refs={{ aboutRef, servicesRef, contactRef, homeRef,featuresRef }} />
        </div>
        <div className="flex gap-4">
          <button className="border-[1px] border-gray-light hover:bg-orange-700 text-gray-darkest   py-2 px-8 rounded-[50px]">
            Signin
          </button>
          <button className="bg-blue-dark hover:bg-blue-700 text-white py-2 px-8 rounded rounded-[50px]">
            Register
          </button>
        </div>
      </nav>
    </header>
  );
};

const NavMenu = ({ scrollToSection, refs }) => {
  return (
    <ul className="flex gap-4">
      <li onClick={() => scrollToSection(refs.homeRef)}>Home</li>
      <li onClick={() => scrollToSection(refs.featuresRef)}>Features</li>
      <li onClick={() => scrollToSection(refs.aboutRef)}>About Us</li>
      <li onClick={() => scrollToSection(refs.servicesRef)}>Services</li>
      <li onClick={() => scrollToSection(refs.contactRef)}>Contact</li>
    </ul>
  );
};

export default Navbar;