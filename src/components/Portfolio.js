import React from 'react';
import Project from './Project';

const projects = [
    {
      title: 'Personal Portfolio',
      description: 'Designed and developed a personal portfolio using React.',
      imageSrc: 'react-portfolio-project.jpg',
      deployedLink: 'https://spereira15.github.io/react-portfolio/',
      githubLink: 'https://github.com/spereira15/react-portfolio'
    },
    {
      title: 'Tech Blog',
      description: 'Full-stack tech blog application.',
      imageSrc: 'tech-blog-project.jpg',
      deployedLink: 'https://spereira15-tech-blog-8ddef4fd17d0.herokuapp.com/',
      githubLink: 'https://github.com/spereira15/tech-blog'
    },
    {
      title: 'ShelfSwap',
      description: 'Where book lovers unite to swap their favorite reads.',
      imageSrc: 'kaption-kingdom-project.jpg',
      deployedLink: 'https://shelf-swap-425acc537cee.herokuapp.com/',
      githubLink: 'https://github.com/k-pineda/ShelfSwap'
    },
    {
      title: 'Note Taker',
      description: 'Full-stack application that allows user to create, store and delete notes.',
      imageSrc: 'note-taker-project.jpg',
      deployedLink: 'https://note-taker-simon-pereira-8b1fad02e781.herokuapp.com/',
      githubLink: 'https://github.com/spereira15/note-taker'
    },
    {
      title: 'Work Day Scheduler',
      description: 'Work Day Scheduler built using JavaScript, jQuery and DayJS.',
      imageSrc: 'work-day-scheduler-project.jpg',
      deployedLink: 'https://spereira15.github.io/work-day-scheduler/',
      githubLink: 'https://github.com/spereira15/work-day-scheduler'
    },
    {
      title: 'Password Generator',
      description: 'This is a password generator built on JavaScript.',
      imageSrc: 'password-generator-project.jpg',
      deployedLink: 'https://spereira15.github.io/javascript-password-generator/',
      githubLink: 'https://github.com/spereira15/javascript-password-generator'
    },
  ];
  
  const Portfolio = () => {
    return (
      <section id="portfolio" className="py-5 text-center d-flex justify-content-center align-items-center">
        <div className="container">
          <h2 className="text-center">Portfolio</h2>
          <div className="row">
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  