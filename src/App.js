import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/react-portfolio-challenge/" element={<Home />} />
          <Route path="/react-portfolio-challenge/about" element={<About />} />
          <Route path="/react-portfolio-challenge/portfolio" element={<Portfolio />} />
          <Route path="/react-portfolio-challenge/contact" element={<Contact />} />
          <Route path="/react-portfolio-challenge/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
