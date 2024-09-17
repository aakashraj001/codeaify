// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useRef } from 'react'
import './App.css'
import About from './pages/about/about'
import Navbar from './pages/components/navbar/navbar'
import Contact from './pages/contact/contact'
import Services from './pages/services/service'
import Footer from './pages/components/footer/footer'
import Home from './pages/home/home'
import Feature from './pages/features/FeaturePage'

function App() {
  // const [count, setCount] = useState(0)
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const featuresRef =useRef(null)
  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };

   window.addEventListener('scroll', () => {
      const header = document.getElementById('header');
      if (window.scrollY > 20 && header) {
        header.classList.add('scrolled');
      } else if(header) {
        header.classList.remove('scrolled');
      }
    });
  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        featuresRef={featuresRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
      <main>
        {/* Pass the refs to the respective components */}
        <Home ref={homeRef}/>
        <Feature ref={featuresRef}/>
        <About ref={aboutRef} />
        <Services ref={servicesRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer/>
    </>
  )
}

export default App
