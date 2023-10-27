import React from 'react';
import './home.css';
import Myimg from '../../assets/myimg.jpg';
import Scrolldown from './Scrolldown';
import HomeSocials from './HomeSocials';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Myimg} alt="" className="home__img" />
        <h1 className="home__name">
          Amisha Prakash
        </h1>

        <span className="home__education">
          B.E in CSE
        </span>

      <HomeSocials/>

      <span className="btn">
        <a href="#contact">
          Contact
        </a>
      </span>
      

      <Scrolldown/>
      </div>
    </section>
  )
}

export default Home