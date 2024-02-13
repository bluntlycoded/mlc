// Projects.js

import React from 'react';
import './Projects.css';
import Navbar from './common/Navbar'; // Adjust the path based on your project structure
import Footer from './common/Footer';

const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 'Project 1',
      title: 'Project 1',
      description: 'Description for Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 'Project 2',
      title: 'Project 2',
      description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 'Project 2',
        title: 'Project 2',
        description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 'Project 2',
        title: 'Project 2',
        description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 'Project 2',
        title: 'Project 2',
        description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 'Project 2',
        title: 'Project 2',
        description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <Navbar />
      <header>
        <h1>Projects</h1>
        <p>Explore Our Latest Projects</p>
      </header>

      <section className="project-cards">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <p>{project.id}</p>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="buttons">
              <button className="info-button">More Info</button>
              <button className="register-button">Github</button>
            </div>
          </div>
        ))}
      </section>
      <Footer/>
    </div>
  );
};

export default Projects;
