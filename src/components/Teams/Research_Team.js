// ResearchT.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons';
import './Teams.css'
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
const teamMembers = [
  {
    name: '',
    position: 'Team Lead',
    imageUrl: 'lead.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/lead-linkedin/',
    instagram: 'https://www.instagram.com/lead-instagram/',
  },
  {
    name: 'Mohit',
    position: 'Co-Team Lead',
    imageUrl: 'colead.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/colead-linkedin/',
    instagram: 'https://www.instagram.com/colead-instagram/',
  },
  {
    name: 'Khushi Rajarkar',
    position: 'Co-Team Lead',
    imageUrl: 'colead.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/colead-linkedin/',
    instagram: 'https://www.instagram.com/colead-instagram/',
  },
  // Add more team members as needed
  {
    name: 'Lingal Lasya Kumari',
    position: 'Member',
    imageUrl: 'member.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '21BCE8739',
  },
  {
    name: 'Samyata',
    position: 'Member',
    imageUrl: 'member.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '21BCE7075',
  },
  {
    name: 'Khushi Trilok Rawat',
    position: 'Member',
    imageUrl: 'member.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '23BCE7131',
  },
  {
    name: 'Giridhar Kanaparti',
    position: 'Member',
    imageUrl: 'member.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '23BCE7605',
  },
  {
    name: 'Divyansh Shukla',
    position: 'Member',
    imageUrl: 'member.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '23BCE7950',
  },
  {
    name: 'Venkata Dhanush',
    position: 'Member',
    imageUrl: 'member.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '23BCE8172',
  },
  {
    name: 'Siddhartha Vedagiri',
    position: 'Member',
    imageUrl: 'member.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '23BCE9303',
  },
  {
    name: 'Keerthi Kesawaran',
    position: 'Member',
    imageUrl: 'member.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '22BCB7049',
  },
  {
    name: 'Aswanth',
    position: 'Member',
    imageUrl: 'member.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '21BCE8854',
  },
  {
    name: 'Monisha Pallela',
    position: 'Member',
    imageUrl: 'member.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '21BCE8665',
  },
  {
    name: 'Nihaal',
    position: 'Member',
    imageUrl: 'member.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '22BCE7828',
  },
  {
    name: 'VV Karthik',
    position: 'Member',
    imageUrl: 'member.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '22BCE8239',
  },
  {
    name: 'Swayam Srujan Tripathy',
    position: 'Member',
    imageUrl: 'member.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    
    registration: '22BCE8719',
  },
];

const ResearchT = () => {
  return (
    <div>
    <Navbar/>
    <h1 className='h1s'>Projects Team</h1>
  <div className="row">
    {/* Lead */}
    <div className="col-md-4">
      <div className="card">
        <img src={teamMembers[0].imageUrl} className="card-img-top" alt={teamMembers[0].name} />
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
  {/* Other Team Members */}
  {/* Team Information Table */}
  <h2 className='h1s'>Team Members</h2>
  <div className='tbl'>
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Registration No.</th>
        <th>Connect With</th>
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

export default ResearchT;