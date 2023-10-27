import React from 'react';
import './about.css';


const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <div className="about__data grid">
          <div className="about__info">
            <br></br>
            <p className="about__description">
            <ul>
            <li>I am Amisha Prakash, a recent Computer Science Engineering graduate based in Bangalore, India. 
            </li><br></br>
            <li>With a strong educational foundation and a passion for technology, I am enthusiastic about contributing to the ever-evolving world of technology and software development. 
            I earned my B.E. degree in CSE in 2023. 
            </li><br></br>
            <li>During my academic journey, I learnt problem-solving skills and gained knowledge in various areas of computer science. My academic background and passion for technology have driven me to explore the realms of software development and web technologies. 
            I'm dedicated to continuous learning and staying up-to-date with the latest industry trends. 
            </li><br></br>
            <li>I also enjoy spending quality time with my family. 
            Apart from this my love for animals is constant.</li>
            <br></br>
            <li>I am constantly looking for new challenges and opportunities to expand my skills, contribute to meaningful projects, and make a positive impact in the tech community.
            </li></ul>
            </p>
          {/* <a href="" className="btn">Download CV</a> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About