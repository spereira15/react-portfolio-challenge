import React from 'react';

const Navigation = ({ setCurrentPage }) => {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => setCurrentPage('home')}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => setCurrentPage('about')}>
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => setCurrentPage('portfolio')}>
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => setCurrentPage('contact')}>
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => setCurrentPage('resume')}>
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
