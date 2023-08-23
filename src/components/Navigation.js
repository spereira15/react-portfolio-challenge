import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/resume" className="nav-link">
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
