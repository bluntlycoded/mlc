// AdminT.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons';
import './Teams.css'
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
const teamMembers = [
  {
    name: 'Irfan Sadiq Rahat',
    position: 'Team Lead',
    imageUrl: 'lead.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/lead-linkedin/',
    instagram: 'https://www.instagram.com/lead-instagram/',
  },
  {
    name: 'Hritwik Ghosh',
    position: 'Vice President',
    imageUrl: 'colead.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/colead-linkedin/',
    instagram: 'https://www.instagram.com/colead-instagram/',
  },
  {
    name: 'Sanya Sooraj Sadanand',
    position: 'Vice President',
    imageUrl: 'colead.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/colead-linkedin/',
    instagram: 'https://www.instagram.com/colead-instagram/',
  },
  // Add more team members as needed
  {
    name: 'Member 1',
    position: 'Role 1',
    imageUrl: 'member1.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    registration: 'Registration 1',
  },
  {
    name: 'Member 2',
    position: 'Role 2',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: 'Registration 2',
  },
];

const AdminT = () => {
  return (
    <div>
        <Navbar/>
        <h1 className='h1s'>Admin Team</h1>
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
              </div>
              <br/>
              <button className="learn-more-button">Know More</button>
            </div>
          </div>
        </div>
        {/* Co-Lead */}
        <div className="col-md-4">
          <div className="card">
            <img src={teamMembers[1].imageUrl} className="card-img-top" alt={teamMembers[1].name} />
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
              </div>
              <br/>
              <button className="learn-more-button">Know More</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={teamMembers[1].imageUrl} className="card-img-top" alt={teamMembers[2].name} />
            <div className="card-body">
              <h5 className="card-title">{teamMembers[2].name}</h5>
              <p className="card-text">{teamMembers[2].position}</p>
              <div className="social-icons">
                <a href={teamMembers[2].linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={teamMembers[1].instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <br/>
              <button className="learn-more-button">Know More</button>
            </div>
          </div>
        </div>
      </div>
      {/* Other Team Members */}
      {/* Team Information Table */}
      <div className='tbl'>
      <h1 className='h1s'>Team Information</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Registration</th>
            <th>Positions</th>
            <th>Instagram</th>
            <th>LinkedIn</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.slice(3).map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.registration}</td>
              <td>{member.position}</td>
              <td>{member.instagram}</td>
              <td>{member.linkedin}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Footer/>
    </div>
  );
};

export default AdminT;
