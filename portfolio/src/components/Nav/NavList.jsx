import React from 'react';
import About from "./About/About"
import Experience from "./Experience/Experience"
import Projects from "./Projects/Projects"
import Skills from './Skills/Skills';

function NavList(props) {
  return (
      <div>
        <About />
        <Experience />
        <Projects />
        <Skills />
      </div>
  );
}

export default NavList;