// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className="header">
            <nav className="nav-bar">
                <div className="logo-container">
                    <img src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Halloween-PNG-Pictures/Halloween_Bat_Silhouette_PNG_Clipart.png?m=1634115382" alt="Logo" className="logo" />
                </div>
                <div className="hamburger">&#9776;</div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/news">Bat News</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/safety">Bat Safety</Link></li>
                    <li><Link to="/breeds">Bat Breeds</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
