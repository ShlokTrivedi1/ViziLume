import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Vizilume</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/#services">Services</Link></li>
        <li><Link to="/#portfolio">Portfolio</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
        <li><Link to="/register" className="register-btn">Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
