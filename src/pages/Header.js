import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-brand" href="#">ActivityNest</a>

        <div className={`navbar-menu ${isOpen ? 'open' : ''}`} id="navbarMenu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/library">Library</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/subscriptions">Subscriptions</Link>
            </li>
          </ul>
          <form className="search-form" role="search">
            <input className="search-input" type="search" placeholder="Search" aria-label="Search" />
            <button className="search-button" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
