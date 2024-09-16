import React from 'react';
import './navbar.css'
import logo from '../../../assets/images/logo.jpg'

const Navbar = ({ scrollToSection, aboutRef, servicesRef, contactRef }) => {
  return (
    <header className="flex max-w-[80vw] mx-auto ">
      <nav className='flex flex-row items-center justify-between'>
        <img className='w-[15vw] h-[15vh] flex object-contain scale-50' src={logo}/>
        <ul className='flex gap-4'>
          <li onClick={() => scrollToSection(aboutRef)}>About Us</li>
          <li onClick={() => scrollToSection(servicesRef)}>Services</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
