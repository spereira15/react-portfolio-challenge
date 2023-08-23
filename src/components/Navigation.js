import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" className="nav-link" activeClassName="active">
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" className="nav-link" activeClassName="active">
            Resume
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
