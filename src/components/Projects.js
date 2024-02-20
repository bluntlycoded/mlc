// Projects.js

import { React } from 'react';
import './Projects.css';
import Navbar from './common/Navbar'; // Adjust the path based on your project structure
import Footer from './common/Footer';
import { useNavigate } from 'react-router-dom';
import BackButton from './common/BackButton';


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
      description: '"Hairstyle Recommendation" employs advanced facial recognition and deep learning for personalized grooming suggestions. "Hand Cricket Game" utilizes gesture recognition for an immersive cricket experience. "Movie/Song Recommendation" blends collaborative filtering and deep learning to analyze user preferences, providing accurate content suggestions. Each project epitomizes the synergy of cutting-edge technology with user-centric design.',
      made_by: 'Rajesh',
      more_info: { Pr1 },
    },
    {
      id: 'Project 2',
      title: 'Hand Cricket Game',
      description: '"Hand Cricket Game" blends cutting-edge gesture recognition technology with immersive graphics for a revolutionary gaming experience. Utilizing motion sensors, users simulate real cricket scenarios through intuitive hand movements, making it a tech-savvy and engaging rendition of the classic sport. The project showcases the seamless fusion of interactive design and motion tracking, redefining virtual cricket enjoyment.',
      made_by: 'Khushi Rawat',
      more_info: { Pr1 },

    },
    {
      id: 'Project 3',
      title: 'Movie/Song Recommendation',
      description: '"Movie/Song Recommendation" leverages advanced collaborative filtering and deep learning algorithms, delving into extensive user data to provide personalized content suggestions. This project seamlessly integrates cloud-based processing for scalability and real-time responsiveness. The user-centric interface enhances the discovery of films and music, epitomizing the intersection of data science and entertainment technology.',
      made_by: 'Nihaal',
      more_info: { Pr1 },
    },
    {
      id: 'Project 4',
      title: 'Bytes to bites',
      description: '"Bytes to Bites" transforms the culinary landscape by fusing technology with gastronomy. This project employs AI and data analytics to create personalized recipes based on user preferences, dietary restrictions, and trending culinary styles. Through an intuitive interface, users embark on a flavorful journey, turning digital bytes into delectable bites.      ',
      more_info: { Pr1 },
      made_by: 'Guna Shekhar',
    },
    {
      id: 'Project 5',
      title: 'Subway Surfers',
      description: '"Subway Surfers" revolutionizes mobile gaming with its endless running and dynamic graphics. Developed in Unity, it delivers a seamless experience optimized for mobile platforms. With responsive touch controls, players navigate urban landscapes, evading obstacles and collecting rewards, setting a benchmark for cross-platform development and captivating gameplay.',
      made_by: 'Khushi',
      more_info: { Pr1 },
    },
    {
      id: 'Project 6',
      title: 'Headsync Shooter',
      description: '"Headsync Shooter" revolutionizes FPS gaming through immersive VR experiences. Utilizing cutting-edge technology, it synchronizes head movements with in-game actions for heightened realism and strategic gameplay. This project sets a new standard, showcasing the transformative potential of synchronized head movements in the immersive gaming landscape.',
      made_by: 'Tarush',
      more_info: { Pr1 },
    },
    {
      id: 'Project 7',
      title: 'Typing test website',
      description: '"The SwiftType Hub" is a user-centric typing test website designed for efficiency and accuracy. Developed with responsive design principles, it adapts to various devices. The platform offers a range of typing challenges, measuring speed, accuracy, and providing personalized insights for improvement. SwiftType Hub makes honing typing skills an intuitive and accessible experience.',
      made_by: 'Sarthak Katiyar',
      more_info: { Pr1 },
    },
    {
      id: 'Project 8',
      title: 'Connect Four Game',
      description: '"Connect Four Game" modernizes the classic board game with seamless digital gameplay. Enjoy strategic battles, dropping discs to connect four in a row. With intuitive controls and vibrant visuals, it captures the timeless essence of the game in a modern, engaging format.',
      made_by: 'Binayak Sinha',
      more_info: { Pr1 },
    },
    {
      id: 'Project 9',
      title: '3-D pacman ',
      description: '"3D Pac-Man" modernizes the classic arcade game with immersive depth and dynamic visuals. Using advanced 3D graphics, it offers a fresh perspective as players navigate the maze, avoiding ghosts and devouring pellets. Responsive controls and visually stunning environments create an exhilarating journey, blending nostalgia with modern gaming.',
      made_by: 'Mihir Prabhakar',
      more_info: { Pr1 },
    },
    {
      id: 'Project 10',
      title: 'Maze Solver',
      description: '"Maze Solver" utilizes advanced algorithms, based on graph theory and pathfinding, to efficiently navigate mazes. The user-friendly interface makes it versatile for educational and practical applications, showcasing the power of algorithms in solving intricate spatial problems across various domains.',
      made_by: 'Sai Sreenadh, Bharathi, Mokshagna',
      more_info: { Pr1 },
    },
    {
      id: 'Project 11',
      title: 'Stock prediction',
      description: '"Stock Prediction Engine" utilizes machine learning and historical data analysis to forecast stock prices. With real-time integration and continuous learning, it provides valuable, data-driven insights for informed investment decisions in dynamic market conditions.',
      made_by: 'Vaibhav',
      more_info: { Pr1 },
    },
    {
      id: 'Project 12',
      title: 'Voice assistant',
      description: '"The Voice Assistant" employs natural language processing and AI for hands-free interactions. With speech recognition, users seamlessly access information, set reminders, and execute commands. Versatile and accessible, it provides an intuitive, voice-controlled experience for efficient daily tasks.',
      made_by: 'Dhruv Agarwal, Soumyadip, Ayush, dhruv Deepak ',
      more_info: { Pr1 },
    },
    {
      id: 'Project 13',
      title: 'Study Buddy',
      description: '"Study Buddy" is an intelligent learning companion, merging AI and personalized study plans. This project analyzes user progress, adapts materials, and provides real-time feedback. With intuitive interfaces, it enhances engagement, making studying efficient and enjoyable. "Study Buddy" revolutionizes learning, demonstrating the synergy of technology and personalized education.',
      made_by: 'Lakshmi, Keerthi Chowdhary, Kushal',
      more_info: { Pr1 },
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <Navbar />
      <BackButton/>
      <header>
        <h1>Projects</h1>
        <p>Explore Our Latest Projects</p>
      </header>

      <section className="project-cards">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p className='bnf'><strong><p>Made By:</p></strong>{project.made_by}</p>
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
