import React from 'react';
import './sidebar.css';


const Sidebar = () => {
  return (
    <>
    <aside className='aside'>
      
        
    
      <nav className='nav'>
        <div className='nav__menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#about" className="nav__link">
                <i className="icon-user-female"></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#education" className="nav__link">
                <i className="icon-graduation"></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#skills" className="nav__link">
                <i className="icon-book-open"></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#work" className="nav__link">
                <i className="icon-layers"></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#resume" className="nav__link">
                <i className="icon-note"></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#contact" className="nav__link">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav--footer">
        <span className="copyright">
          &copy; 2022 - 2023.
        </span>
      </div>

    </aside>
    <div className="nav__toggle">
      <i className="icon-menu"></i>
    </div>
    </>
  )
}

export default Sidebar