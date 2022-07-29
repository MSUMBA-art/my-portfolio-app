import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-left">
        <div className="nav-name">Alexander</div>
        <span>toggle</span>
      </div>
      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
              </div>
              <button className='button'>Let's Talk!</button>
      </div>
    </div>
  );
}

export default Navbar;