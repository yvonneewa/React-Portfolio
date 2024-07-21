import React from 'react';
import '../index.css';

const projects = [
  {
    title: 'PWA challenge',
    imageSrc: './src/images/computer17.png',
    deployedLink: 'https://pwa-challenge-text-editor.onrender.com/',
    githubLink: 'https://github.com/yvonneewa/PWA-Challenge-Text-Editor'
  },
  {
    title: 'MCV challenge',
    imageSrc: './src/images/computer16.jpg',
    deployedLink: 'https://mvc-challenge-tech-blog-12jv.onrender.com/',
    githubLink: 'https://github.com/yvonneewa/MVC-Challenge-Tech-Blog'
  },
  {
    title: 'NoSql Challenge',
    imageSrc: './src/images/computer15.jpg',
    VideoWalkthrough: 'https://drive.google.com/file/d/1ArQQsEV22DbpJ7dd4p88QIuqxXj-htSC/view',
    githubLink: 'https://github.com/yvonneewa/NoSQL-Social-Network-API'
  },
  {
    title: 'ORM Challenge',
    imageSrc: './src/images/computer19.jpg',
    VideoWalkthrough: 'https://app.screencastify.com/v3/watch/EPuasD2S821kz0h27OT8',
    githubLink: 'https://github.com/yvonneewa/ORM-Challenge'
  },
  {
    title: 'NoteTaker App',
    imageSrc: './src/images/computer18.jpg',
    deployedLink: 'https://note-taker-challenge-mt8b.onrender.com/',
    githubLink: 'https://github.com/yvonneewa/Note-Taker-challenge'
  },
  {
    title: 'Taskbar App',
    imageSrc: './src/images/computer22.jpg', 
    deployedLink: 'https://yvonneewa.github.io/taskbar-challenge/',
    githubLink: 'https://github.com/yvonneewa/taskbar-challenge'
  }
];

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className='portfolioName'>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            {/* <a href={project.deployedLink || project.githubLink} target="_blank" rel="noopener noreferrer">
              <img src={project.imageSrc} alt={project.title} />
            </a> */}
            <div className="project-details" style ={{backgroundImage:`url(${project.imageSrc})`}}>
              <h3>{project.title}</h3>
              <p>
                {project.VideoWalkthrough && (
                  <a href={project.VideoWalkthrough} target="_blank" rel="noopener noreferrer">View Video Walkthrough</a>
                )}
                {project.deployedLink && (
                  <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Deployed</a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
