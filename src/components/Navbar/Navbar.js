import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/images/logo.png';  

function Navbar() {
  return (
    <header className="he">
      <Link to="/">
        <img 
          className="img1" 
          src={logo} 
          alt="logo" 
        />
      </Link> 
      <nav>
        <ul className="nav-bar">
          <li className="nav-item"><Link to="/home">Home</Link></li>
          <li className="nav-item"><Link to="/about">About</Link></li>
          <li className="nav-item"><Link to="/resume">Resume</Link></li>
          <li className="nav-item"><Link to="/certificates">Certificates</Link></li>
          <li className="nav-item"><Link to="/portfolio">Portfolio</Link></li>
          <li className="nav-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <ul className="main-actions">
        <li>
          <a href="https://www.facebook.com/profile.php?id=100012316723325&mibextid=JRoKGi" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/nadeen_qadomi?igsh=MTVwc2huNzZxcmpkeg==" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nadeen-qadoomi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;