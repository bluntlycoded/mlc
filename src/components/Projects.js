// Projects.js

import {React} from 'react';
import './Projects.css';
import Navbar from './common/Navbar'; // Adjust the path based on your project structure
import Footer from './common/Footer';
import { useNavigate } from 'react-router-dom';


const Projects = () => {
  let navigate = useNavigate(); 
  const Pr1= () =>{ 
    let path = `/project1`; 
    navigate(path);
  }
  // Sample project data
  const projects = [
    {
      id: 'Project 1',
      title: 'Hairstyle Recommendation',
      description: 'Description for Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      more_info: {Pr1},
    },
    {
      id: 'Project 2',
      title: 'Project 2',
      description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      more_info: {Pr1},

    },
    {
        id: 'Project 2',
        title: 'Project 2',
        description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        more_info: {Pr1},
      },
      {
        id: 'Project 2',
        title: 'Project 2',
        description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        more_info: {Pr1},
        made_by:'',
      },
      {
        id: 'Project 2',
        title: 'Project 2',
        description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        more_info: {Pr1},
      },
      {
        id: 'Project 2',
        title: 'Project 2',
        description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        more_info: {Pr1},
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
            <p><strong><p>Made By:</p></strong>{project.made_by}</p>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="buttons">
              <button className="info-button" onClick={Pr1}>More Info</button>
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
