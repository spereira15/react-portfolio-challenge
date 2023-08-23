import React from 'react';
import Project from './Project';

const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      imageSrc: 'project1-image-url.jpg',
      deployedLink: 'https://project1-deployed-link.com',
      githubLink: 'https://github.com/username/project1'
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      imageSrc: 'project2-image-url.jpg',
      deployedLink: 'https://project2-deployed-link.com',
      githubLink: 'https://github.com/username/project2'
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
  