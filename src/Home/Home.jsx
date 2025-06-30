import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Skill from '../Components/Skill';
import Projects from '../Components/Projects/Projects';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import AnimatedSection from '../Components/AnimatedSection';
import Contact from '../Components/Projects/Contact';

const Home = () => {
    //   const [selectedProject, setSelectedProject] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
      const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
   return (
    <div className="text-2xl font-montserrat">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <AnimatedSection>
        <About />
      </AnimatedSection>

      <AnimatedSection>
        <Skill />
      </AnimatedSection>

   <Fade direction='up' triggerOnce='true'>

        <Projects />
   </Fade>
   <AnimatedSection>
    <Contact/>
   </AnimatedSection>



  
    </div>
  );
};

export default Home;