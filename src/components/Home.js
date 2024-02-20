// Home.js

import { React, useEffect, useState } from 'react';
import './Home.css'; // Create a corresponding CSS file for styling
import Slider from './common/Slider';
import { Link,useNavigate } from 'react-router-dom';
import './common/Navbar.css';

import image1 from '../components/Images/5.jpg';
import image2 from '../components/Images/2.jpg';
import image3 from '../components/Images/12.jpg';
import logo from '../components/Images/removebg.png'
import hck from '../components/Images/cds.jpeg'
import Footer from './common/Footer';
import ScrollToTopButton from './common/ScrollToTopButton';
import getout from '../components/Images/Getout.png'
import arcade from './Images/Arcade Zone.png'


const Home = () => {
  let navigate = useNavigate(); 
  const AboutUs = () =>{ 
    let path = `/about`; 
    navigate(path);
  }
  const Events = () =>{ 
    let path = `/events`; 
    navigate(path);
  }
  const Dept = () =>{ 
    let path = `/departments`; 
    navigate(path);
  }
  const Projects = () =>{ 
    let path = `/projects`; 
    navigate(path);
  }
  const Pr1 = () =>{ 
    let path = `/project1`; 
    navigate(path);
  }
  const Pr2 = () =>{ 
    let path = `/project2`; 
    navigate(path);
  }
  const Pr3 = () =>{ 
    let path = `/project3`; 
    navigate(path);
  }
  
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const images = [image1, image2, image3];
  
  const projects = [
    {
      id: 'Project 1',
      title: 'Hair Style Recommendation',
      description: 'Dive into the world of Hair Style Recommendation – where trends meet individuality! Our project is your personal stylist, suggesting the perfect hairdos based on your unique features and preferences. With a mix of cutting-edge technology and style expertise, discover a world of hair inspiration that complements your personality flawlessly. Elevate your look!',
      made_by:'A Rajesh Chowdary',
    },
    {
      id: 'Project 2',
      title: 'Hand Cricket Game',
      description: 'Step up to the crease and experience the thrill of Hand Cricket! Our project brings the classic game to life, allowing users to bat and bowl with just their hands. With lively animations, strategic gameplay, and endless fun, Hand Cricket Game is the ultimate blend of nostalgia and excitement. Play ball!',
      made_by:'Khushi Rawat'
    },
    {
      id: 'Project 3',
      title: 'Study Buddy',
      description: 'Introducing Study Buddy, your genius study companion! Transforming PDFs into a dynamic learning experience, our project analyzes study materials and generates personalized questions. Seamlessly adapting to your curriculum, Study Buddy turns every page into an interactive quiz, making learning engaging, efficient, and tailored just for you. Elevate your study sessions with a smarter approach!',
      made_by:'Lakshmi,Keerthi Chowdhary,Kushal'
    },
    // Add more projects as needed
  ];


  const upcomingEventsData = [
    {
      id: 1,
      title: 'Get Out',
      date: 'February 22, 2024',
      location: 'AB1-4th Floor',
      poster: getout,
      info_page: Pr1,
    },
    {
      id: 2,
      title: 'Arcade Zone-VTAPP',
      date: 'Feb 22, 2024',
      location: 'AB1-409',
      poster: arcade,
      info_page: Pr2,
    },
    {
      id: 3,
      title: 'Hackathon',
      date: 'Feb 22, 2024',
      location: 'CB-IIEC',
      poster: hck,
      info_page: Pr3,
    },
  ];

  return (
    <div className="home-container">
     
      <nav style={{
        color: "white",
        fontFamily: "Poppins",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        fontStyle: "bold",
        marginTop: "2",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Added box shadow for a modern touch
      }} className={`navbar ${scrolling ? 'scrolling' : ''}`}>
              {/* <img src={logo} alt="logo" style={{ width: "50px", height: "50px",padding:"0" }} className='nms' />
              <br/> */}
        <Link to="/" style={{ textDecoration: "none", color: "inherit", fontSize: "1.5rem", fontWeight: "bold",padding:"0px" }}>The Machine Learning Club</Link>
        <div className="nav-links">
          {/* {scrolling ? 'Scrolling' : 'Not Scrolling'} */}
          {/* Desktop Links */}
          <ul className="desktop-links" style={{ display: "flex", gap: "1rem" }}>
            <li><Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link></li>

            <li><Link to="/about" style={{ textDecoration: "none", color: "white" }}>About Us</Link></li>
            <li><Link to="/contact" style={{ textDecoration: "none", color: "white" }}>Contact Us</Link></li>
            <li><Link to="/projects" style={{ textDecoration: "none", color: "white" }}>Projects</Link></li>
            <li><Link to="/events" style={{ textDecoration: "none", color: "white" }}>Events</Link></li>
            <li><Link to="/departments" style={{ textDecoration: "none", color: "white" }}>Departments</Link></li>
          </ul>
          {/* Mobile Menu */}
          <div className="mobile-menu" style={{ display: "none" }}>
            <Link to="/menu" className="menu-icon" style={{ fontSize: "1.5rem", color: "white" }}>☰</Link>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              <li><Link to="/about" style={{ textDecoration: "none", color: "white" }}>About Us</Link></li>
              <li><Link to="/contact" style={{ textDecoration: "none", color: "white" }}>Contact Us</Link></li>
              <li><Link to="/achievements" style={{ textDecoration: "none", color: "white" }}>Achievements</Link></li>
              <li><Link to="/events" style={{ textDecoration: "none", color: "white" }}>Events</Link></li>
              <li><Link to="/departments" style={{ textDecoration: "none", color: "white" }}>Departments</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="slider-section">
        <Slider images={images} />
      </section>

      <section className="about-section ">
        <h2>About Us</h2>
        <br/>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, marginRight: '20px' }}>
            {/* Content for the first column */}
            <img src={logo} alt='logimg'/>
            <h2 className='abpc'>Exploring,Innovating,Redefining</h2>
              </div>
          <div style={{ flex: 1 }} className='abp abpc'>
            {/* Content for the second column */}
            <p>The Machine Learning Club (MLC) at VIT AP is a dynamic community of AI enthusiasts dedicated to exploring the vast realm of machine learning and artificial intelligence. Committed to fostering collaboration, MLC aims to empower students to delve into machine learning, stay abreast of the latest advancements, and apply their knowledge to real-world challenges. The club prioritizes cultivating an environment of curiosity, innovation, and shared passion for AI, welcoming members of all expertise levels. MLC's diverse and inclusive community encourages contributions from everyone, creating a space where innovation and excellence thrive across Web and App Development, Machine Learning, and UI/UX Design.</p>
            <button className="learn-more-button" onClick={AboutUs}>Learn More</button>

          </div>
        </div>

      </section>
      <h1 className='h2c'>We Specialize in</h1>
      <section className="specialization-row">
        <div className="specialization">
          <h2>Web and App Development</h2>
          <p>
            In the domain of Web and App Development, our expertise lies in merging state of the art technologies with inventive solutions. Our team excels in creating intuitive applications that fulfill diverse requirements, emphasizing seamless user experiences. With a focus on every phase, from conceptualization to implementation, we're committed to delivering resilient and adaptable solutions.
          </p>
        </div>

        <div className="specialization">
          <h2>Machine Learning</h2>
          <p>
            Machine learning is a dynamic and rapidly evolving field within the broader realm of artificial intelligence. At its core, machine learning involves the development and implementation of algorithms that enable computers to learn from data, recognize patterns, and make decisions or predictions. The club fosters an environment where individuals can deepen their understanding of machine learning algorithms, explore innovative applications across diverse industries, and share insights into the evolving landscape of AI research.
          </p>
        </div>

        <div className="specialization">
          <h2>UI/UX Designers</h2>
          <p>
            Within MLC, our UI/UX designers blend aesthetics and functionality, serving as architects for captivating user experiences. Their precise focus on detail and a user-centric methodology elevate both the visual allure and usability of our projects. These experts craft designs that transcend mere aesthetics, ensuring a seamless harmony between visual appeal and practical functionality. Through their dedication, our projects not only delight users but also fulfill their needs efficiently, embodying the pinnacle of the user-centric design philosophy within the realm of MLC's initiatives.
          </p>
        </div>
      </section>

<section className='upce'>
<h2>Upcoming Events</h2>
      <section className="upcoming-events">
        
        {upcomingEventsData.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.poster} width={250} height={250} alt='event_img'/>
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <button className="learn-more-button">Learn More</button>
          </div>
        ))}
      </section>
<ScrollToTopButton/>
      <button className="learn-more-button"onClick={Events}>All Events</button>
      </section>

      <section className='prjd'>
      <h2>Our Projects</h2>
      <section className="upcoming-events">
        
        {projects.map(event => (
          <div key={event.id} className="event-card">
            <p>{event.id}</p>
            <h3>{event.title}</h3>
            
            <p> {event.description}</p>
            <button className="learn-more-button abpc"x>Know More</button>
          </div>
        ))}
      </section>

      <button className="learn-more-button abpc"onClick={Projects}>All Projects</button>
      </section>
      <section className="our-stats-section">
        <h2>MLC Family</h2>
        <div className="stats-container">
          <div className="stat-card">
            <h3>Projects Made</h3>
            <p className='cmr counter'>20+</p>
            <p>And Counting</p>
            <button className="learn-more-button abpc"onClick={Projects}>Learn More</button>
          </div>
          <div className="stat-card">
            <h3>Events Till Date</h3>
            <p className='cmr counter'>50+</p>
            <p>Conducted Successfully</p>
            <button className="learn-more-button abpc"onClick={Events}>Learn More</button>
          </div>
          <div className="stat-card">
            <h3>Our Family Size</h3>
            <p className='cmr counter'>250+</p>
            <p>Active Members</p>
            <button className="learn-more-button abpc"onClick={Dept}>Know More</button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
