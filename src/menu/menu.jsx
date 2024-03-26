import React, { useState } from 'react';
import './Menu.css';

const SwipeMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="swipe-menu-container">
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
        <li><a href="#">💎</a></li>
          <li><a href="https://codepen.io/BrunoBaumgartner/pen/JjzQdmB">ABOUT</a></li>
          <li><a href="tel:0794630666">CONTACT</a></li>
        </ul>
      </div>
      <div className="content">
        <button className="frites-menu-button" onClick={toggleMenu}>
          <div className={`burger ${menuOpen ? 'open' : ''}`}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </button>
        <p>Liebe Beryll, ich bin froh dass es Dich gibt!</p>
      </div>
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </div>
  );
};

export default SwipeMenu;
