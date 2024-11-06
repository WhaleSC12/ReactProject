// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="logo-container">
          <img
            src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Halloween-PNG-Pictures/Halloween_Bat_Silhouette_PNG_Clipart.png?m=1634115382"
            alt="Logo"
            className="logo"
          />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
          <li><a href="/">Home</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/news">Bat News</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/safety">Bat Safety</a></li>
          <li><a href="/breeds">Bat Breeds</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
