// Projects.js

import { React } from 'react';
import './Projects.css';
import Navbar from './common/Navbar'; // Adjust the path based on your project structure
import Footer from './common/Footer';
import { useNavigate } from 'react-router-dom';


const Projects = () => {
  let navigate = useNavigate();
  const Pr1 = () => {
    let path = `/project1`;
    navigate(path);
  }
  // Sample project data
  const projects = [
    {
      id: 'Project 1',
      title: 'Hairstyle Recommendation',
      description: '"Hairstyle Recommendation" incorporates cutting-edge computer vision and machine learning algorithms to revolutionize personalized grooming experiences. Leveraging facial recognition technology, the platform meticulously analyzes facial features, hair textures, and style trends. Deep learning models discern individual preferences by interpreting user-provided data and continuously adapt to evolving fashion trends. The synergy of image processing and artificial intelligence ensures accuracy in hairstyle suggestions, promoting a seamless fusion of beauty and technology.',
      made_by: 'Rajesh',
      more_info: { Pr1 },
    },
    {
      id: 'Project 2',
      title: 'Hand Cricket Game',
      description: '"Hand Cricket Game" integrates gesture recognition technology, utilizing advanced motion sensors to capture and interpret users hand movements. Complex algorithms simulate realistic cricket scenarios, making the gaming experience both immersive and intuitive. The project involves real-time graphics rendering and interactive design principles, creating a visually appealing and responsive virtual cricket match. By merging traditional gameplay with modern technology, this project showcases the exciting potential of gesture-based interaction in the gaming realm.',
      made_by: 'Khushi Rawat',
      more_info: { Pr1 },

    },
    {
      id: 'Project 3',
      title: 'Movie/Song Recommendation',
      description: '"Movie/Song Recommendation" employs state-of-the-art collaborative filtering and deep learning algorithms to analyze vast datasets of user preferences. Neural networks discern intricate patterns in viewing or listening histories, refining recommendations over time. The project seamlessly integrates with recommendation engines, leveraging cloud computing for scalable processing power. With an emphasis on user experience design, the interface prioritizes simplicity and responsiveness, showcasing the intersection of data science and entertainment technology. This project stands at the forefront of personalized content curation, showcasing the transformative power of machine learning in the entertainment landscape.',
      made_by: 'Nihaal',
      more_info: { Pr1 },
    },
    {
      id: 'Project 4',
      title: 'Bytes to bites',
      description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      more_info: { Pr1 },
      made_by: 'Guna Shekhar',
    },
    {
      id: 'Project 5',
      title: 'Subway Surfers',
      description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      made_by: 'Khushi',
      more_info: { Pr1 },
    },
    {
      id: 'Project 6',
      title: 'Headsync Shooter',
      description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      made_by: 'Tarush',
      more_info: { Pr1 },
    },
    {
      id: 'Project 7',
      title: 'Typing test website',
      description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      made_by: 'Sarthak Katiyar',
      more_info: { Pr1 },
    },
    {
      id: 'Project 8',
      title: 'Connect Four Game',
      description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      made_by: 'Binayak Sinha',
      more_info: { Pr1 },
    },
    {
      id: 'Project 9',
      title: '3-D pacman ',
      description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      made_by: 'Mihir Prabhakar',
      more_info: { Pr1 },
    },
    {
      id: 'Project 10',
      title: 'Maze Solver',
      description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      made_by: 'Sai Sreenadh, Bharathi, Mokshagna',
      more_info: { Pr1 },
    },
    {
      id: 'Project 11',
      title: 'Stock prediction',
      description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      made_by: 'Vaibhav',
      more_info: { Pr1 },
    },
    {
      id: 'Project 12',
      title: 'Voice assistant',
      description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      made_by: 'Dhruv Agarwal, Soumyadip, Ayush, dhruv Deepak ',
      more_info: { Pr1 },
    },
    {
      id: 'Project 13',
      title: 'Study Buddy',
      description: 'Description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      made_by: 'Lakshmi, Keerthi Chowdhary, Kushal',
      more_info: { Pr1 },
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
      <Footer />
    </div>
  );
};

export default Projects;
