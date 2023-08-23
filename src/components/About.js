import React from 'react';

const About = () => {
  return (
    <section id="home" className="py-5 text-center d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <img src="/profile.svg" alt="welcome" className="img-fluid custom-img" />
          </div>
          <div className="col-md-4">
          <h2>About Me</h2>
            <p>
              Hi, I'm Simon Pereira. I'm a passionate Full-Stack Software Engineer with a love for building web applications.
              I am based in Miami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

