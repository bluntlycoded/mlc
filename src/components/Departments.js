// Departments.js
import { useEffect } from 'react';
import React from 'react';
import './Departments.css'; // Create a corresponding CSS file for styling
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import {useNavigate} from 'react-router-dom'
import BackButton from './common/BackButton';
import bgimg from '../components/Images/divbg.jpg'

const Departments = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  const divStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%', // Set the width and height of the container if needed
    height: '200px', // Adjust the height as necessary
  };
  

  let navigate = useNavigate(); 
  const Projects = () =>{ 
    let path = `/project-team`; 
    navigate(path);
  }
  const Technical = () =>{ 
    let path = `/technical-team`; 
    navigate(path);
  }
  const Admin = () =>{ 
    let path = `/admin-team`; 
    navigate(path);
  }
  const Eventm = () =>{ 
    let path = `/events-mgt-team`; 
    navigate(path);
  }
  const Marketing = () =>{ 
    let path = `/marketing-team`; 
    navigate(path);
  }
  const Documentation = () =>{ 
    let path = `/documentation-team`; 
    navigate(path);
  }
  const Outreach = () =>{ 
    let path = `/Outreach-pr-team`; 
    navigate(path);
  }
  const Research = () =>{ 
    let path = `/research-team`; 
    navigate(path);
  }
  const Design = () =>{ 
    let path = `/design-team`; 
    navigate(path);
  }
  const SocialM = () =>{ 
    let path = `/social-media-team`; 
    navigate(path);
  }
  const departmentsData = [
    {
      id: 1,
      name: 'Admin',
      description: 'Handle administrative tasks and ensure smooth operation of the organization.',
      fullpage: Admin,
    },
    {
      id: 2,
      name: 'Technical',
      description: 'Focus on technical aspects, development, and innovation within the organization.',
      fullpage: Technical
    },
    {
      id: 3,
      name: 'Projects',
      description: 'Manage and execute various projects undertaken by the organization.',
    fullpage:Projects    },
    {
      id: 10,
      name: 'Event Management',
      description: 'Plan and organize events to engage the community and achieve organizational goals.',
    fullpage:Eventm
    },
    {
      id: 5,
      name: 'Social Media',
      description: 'Manage and enhance the organization\'s presence on social media platforms.',
    fullpage:SocialM
    },
    {
      id: 6,
      name: 'Design',
      description: 'Create visually appealing designs for the organization\'s projects and events.',
    fullpage:Design
    },
    {
      id: 7,
      name: 'Documentation',
      description: 'Prepare and maintain documentation for projects, events, and organizational processes.',
    fullpage:Documentation,
    },
    {
      id: 8,
      name: 'Marketing',
      description: 'Develop and implement marketing strategies to promote the organization and its activities.',
    fullpage:Marketing
    },
    {
      id: 9,
      name: 'Outreach & PR',
      description: 'Reach out to the community and maintain public relations to enhance the organization\'s image.',
    fullpage:Outreach
    },
    {
      id: 4,
      name: 'Research',
      description: 'Conduct research activities to contribute to the organization\'s knowledge base and goals.',
    fullpage:Research
    },
  ];



  return (
    <div className="departments-container">
      <Navbar />
      <BackButton/>
      <header style={divStyle}>
        <h1>Departments</h1>
        <p>Explore the different departments within our Club.</p>
      </header>

      <section className="departments-list">
        {departmentsData.map(department => (
          <div key={department.id} className="department-card">
            <h2>{department.name}</h2>
            <p>{department.description}</p>
            <button className="more-info-button" onClick={department.fullpage}>More Info</button>
          </div>
        ))}
      </section>

      <Footer/>
    </div>
  );
};

export default Departments;
