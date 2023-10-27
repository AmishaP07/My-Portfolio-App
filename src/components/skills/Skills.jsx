import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <section className="about container section" id="skills">
      <h2 className="section__title">Skills</h2>
    <div className="about__skills grid">
      <div className="skills__data">
        <div className="skills__title">
          <h3 className="skills__name">Java</h3>
            <span className="skills__number">90%
            </span>
        </div>
        <div className="skills__bar">
          <span className="skills__percentage java"></span>
        </div>
      </div>

      <div className="skills__data">
        <div className="skills__title">
          <h3 className="skills__name">Python</h3>
            <span className="skills__number">85%
            </span>
        </div>
        <div className="skills__bar">
          <span className="skills__percentage python"></span>
        </div>
      </div>

      <div className="skills__data">
        <div className="skills__title">
          <h3 className="skills__name">Data Structures and Algorithms</h3>
            <span className="skills__number">85%
            </span>
        </div>
        <div className="skills__bar">
          <span className="skills__percentage datastructure"></span>
        </div>
      </div>

      <div className="skills__data">
        <div className="skills__title">
          <h3 className="skills__name">HTML/CSS</h3>
            <span className="skills__number">90%
            </span>
        </div>
        <div className="skills__bar">
          <span className="skills__percentage htmlcss"></span>
        </div>
      </div>

      <div className="skills__data">
        <div className="skills__title">
          <h3 className="skills__name">ReactJs</h3>
            <span className="skills__number">90%
            </span>
        </div>
        <div className="skills__bar">
          <span className="skills__percentage reactjs"></span>
        </div>
      </div>

      <div className="skills__data">
        <div className="skills__title">
          <h3 className="skills__name">RestfulAPI</h3>
            <span className="skills__number">85%
            </span>
        </div>
        <div className="skills__bar">
          <span className="skills__percentage restfulapi"></span>
        </div>
      </div>

      <div className="skills__data">
        <div className="skills__title">
          <h3 className="skills__name">SQL</h3>
            <span className="skills__number">85%
            </span>
        </div>
        <div className="skills__bar">
          <span className="skills__percentage sql"></span>
        </div>
      </div>

      <div className="skills__data">
        <div className="skills__title">
          <h3 className="skills__name">OOPS</h3>
            <span className="skills__number">90%
            </span>
        </div>
        <div className="skills__bar">
          <span className="skills__percentage oops"></span>
        </div>
      </div>
    
    </div>
    </section>
    
  )
}

export default Skills