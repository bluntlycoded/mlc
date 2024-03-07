// ProjectT.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons';
import './Teams.css'
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import PLead from '../../components/Images/Teams/Projects_Lead.jpg';
import PCLead from '../../components/Images/Teams/PROJ_COL.jpeg';
import BackButton from '../common/BackButton';
import { useEffect } from 'react';
import logo from '../Images/removebg.png';
const teamMembers = [
  {
    name: 'Rahul Nayak (Raghav)',
    position: 'Team Lead',
    imageUrl: logo,
    linkedin: 'https://www.linkedin.com/in/bluntlycoded/',
    instagram: 'https://www.instagram.com/nrahulanenenu/',
    github: 'https://www.github.com/Bluntlycoded/',
    imageStyle: {
      width: '75%', // Specify the width in pixels or any other unit
      height: '250px', // Specify the height in pixels or any other unit
    },
  },
  {
    name: 'Vansh Singh',
    position: 'Co-Team Lead',
    imageUrl: logo, // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/colead-linkedin/',
    instagram: 'https://www.instagram.com/colead-instagram/',
    github: 'https://www.github.com/colead-github/',
  },
  {
    name: 'Svvs Vivaswanth',
    position: 'Co-Team Lead',
    imageUrl: logo,// Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/colead-linkedin/',
    instagram: 'https://www.instagram.com/colead-instagram/',
    github: 'https://www.github.com/colead-github/',
  },
  // Add more team members as needed
  {
    name: 'S Anushka',
    position: 'Member',
    imageUrl: 'member1.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '23BCE7489',
  },
  {
    name: 'Vaibhav Manihar',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCB7163',
  },
  {
    name: 'Sarthak Katiyar',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCB7039',
  },
  {
    name: 'Tarush Saxena',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE8345',
  },
  {
    name: 'Binayak Sinha',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE8642',
  },
  {
    name: 'Karthik',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE8926',
  },
  {
    name: 'Anupam Mishra',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE8224',
  },
  {
    name: 'Venu',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCB7275',
  },
  {
    name: 'Sadhia',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '21BCE9197',
  },
  {
    name: 'Sania',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE8120',
  },
  {
    name: 'Puneet Verma',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE9208',
  },
  {
    name: 'Sayantan Ghorai',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE9219',
  },
  {
    name: 'Meehir Prabhakar',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE8990',
  },
  {
    name: 'Dhruv Aggarwal',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE7474',
  },
  {
    name: 'Dhruv Deepak',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE9187',
  },
  {
    name: 'Soumyadeep Mukherjee',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE8129',
  },
  {
    name: 'Ayush Baneerjee',  
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE8338',
  },
  {
    name: 'Asutosh Dash',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE7109',
  },
  {
    name: 'Revanth Reddy',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE9606',
  },
  {
    name: 'Lasya Priya',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE9424',
  },
  {
    name: 'K Amrutha',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE8859',
  },
  {
    name: 'Sai Sreenadh',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE7616',
  },
  {
    name: 'K Bharathi',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE7607',
  },
  {
    name: 'Mokshagna',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE9782',
  },

];

const ProjectT = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div>
        <Navbar/>
        <BackButton/>
        <h1 className='h1s'>Projects Team</h1>
      <div className='row-parent'>
      <div className="row">
        {/* Lead */}
        <div className="col-md-4">
          <div className="card">
          <img
      src={teamMembers[0].imageUrl}
      className="card-img-top"
      alt={teamMembers[0].name}
      style={teamMembers[0].imageStyle}
    />
    <div className="card-body">
              <h5 className="card-title">{teamMembers[0].name}</h5>
              <p className="card-text">{teamMembers[0].position}</p>
              <div className="social-icons">
                <a href={teamMembers[0].linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={teamMembers[0].instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />

                </a>
                <a href={teamMembers[0].github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                  </a>
              </div>
            </div>
          </div>
        </div>
        {/* Co-Lead */}
        <div className="col-md-4">
          <div className="card">
            <img src={teamMembers[1].imageUrl} className="card-img-top" alt={teamMembers[1].name} width={250} height={250}/>
            <div className="card-body">
              <h5 className="card-title">{teamMembers[1].name}</h5>
              <p className="card-text">{teamMembers[1].position}</p>
              <div className="social-icons">
                <a href={teamMembers[1].linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={teamMembers[1].instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href={teamMembers[2].github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={teamMembers[2].imageUrl} className="card-img-top" alt={teamMembers[2].name} width={250} height={250}/>
            <div className="card-body">
              <h5 className="card-title">{teamMembers[2].name}</h5>
              <p className="card-text">{teamMembers[2].position}</p>
              <div className="social-icons">
                <a href={teamMembers[2].linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={teamMembers[2].instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href={teamMembers[2].github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* Other Team Members */}
      {/* Team Information Table */}
      <h2 className='h1s'>Team Members</h2>
      <div className='tbl'>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Registration No.</th>
            <th>Connect At</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.slice(3).map((member, index) => (
            <tr key={index}>
              <td>{member.name}
              
              
                  </td>
              <td>{member.registration}</td>
<td>
<a href={member.github} target="_blank" rel="noopener noreferrer" className='ls'>
                  <FontAwesomeIcon icon={faGithub} />
                  </a>

                  <a href={member.instagram} target="_blank" rel="noopener noreferrer"className='lss'>
                  <FontAwesomeIcon icon={faInstagram} /></a>
                  
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className='ls'>
                  <FontAwesomeIcon icon={faLinkedin} /></a>
</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Footer/>
    </div>
  );
};

export default ProjectT;
