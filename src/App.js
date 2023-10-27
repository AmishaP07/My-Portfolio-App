import React from 'react';
import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';


const App=()=>{
  return(
    <>
    <Sidebar/>
    <main className='main'>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Portfolio/>
      <Resume/>
      <Contact/>
    </main>
    </>
  );
}

export default App;
