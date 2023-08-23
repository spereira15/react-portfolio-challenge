import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-4">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Simon Pereira</p>
      </div>
    </footer>
  );
};

export default Footer;
