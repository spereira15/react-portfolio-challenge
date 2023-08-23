import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-primary text-white py-3">
      <div className="container">
        <nav className="navbar navbar-expand-md">
          <a className="navbar-brand">Simon Pereira</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Navigation />
        </nav>
      </div>
    </header>
  );
};

export default Header;
