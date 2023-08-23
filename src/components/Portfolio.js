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
      title: 'KaptionKingdom',
      description: 'Quote generator web application.',
      imageSrc: 'kaption-kingdom-project.jpg',
      deployedLink: 'https://supremecosta.github.io/Kaption-Kingdom/',
      githubLink: 'https://github.com/SupremeCosta/Kaption-Kingdom'
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
  