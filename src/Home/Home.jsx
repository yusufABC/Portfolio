import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skill from "../Components/Skill";
import Projects from "../Components/Projects/Projects";
import AnimatedSection from "../Components/AnimatedSection";
import Contact from "../Components/Projects/Contact";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dracula";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="text-2xl font-montserrat">
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      
      />

      <section className="min-h-screen">
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
      </section>

      <section className="min-h-screen">
        <AnimatedSection>
          <About />
        </AnimatedSection>
      </section>

      <section  className="min-h-screen">
        <AnimatedSection>
          <Skill />
        </AnimatedSection>
      </section>

      <section  className="min-h-screen">
        <Fade direction="up" triggerOnce>
          <Projects />
        </Fade>
      </section>

      <section  className="min-h-screen">
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </section>
    </div>
  );
};


export default Home;
