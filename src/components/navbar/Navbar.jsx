import React, { useState } from 'react'
import "./Navbar.css";

export default function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

  return (
    <nav className="navbar">
        <div className="container-fluid">
            <div className="logo">
                <img src="images/ALMS-logo.png" alt="logo" />
                <h2>ALMS Global</h2>
            </div>
            <button className="toggle-button" onClick={toggleNavbar}>
                ☰
            </button>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    </nav>
  )
}
