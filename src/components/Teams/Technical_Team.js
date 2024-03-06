// TechT.js
import {React,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons';
import './Teams.css'
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import BackButton from '../common/BackButton';
const teamMembers = [
  {
    name: 'Diptorishi Tripathi',
    position: 'Team Lead',
    imageUrl: 'lead.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/lead-linkedin/',
    instagram: 'https://www.instagram.com/lead-instagram/',
    github:''
  },
  {
    name: 'Kushaj Solanki',
    position: 'Co-Lead',
    imageUrl: 'colead.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/colead-linkedin/',
    instagram: 'https://www.instagram.com/colead-instagram/',
    github:'',
  },
  // Add more team members as needed
  {
    name: 'Arnab Mondal',
    position: 'Member',
    imageUrl: 'member1.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '23BCE8573',
  },
  {
    name: 'S Lakshmi Naga Sai',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE8552',
  },
  {
    name: 'T Dhanushya',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE9651',
  },
  {
    name: 'N Srinija Naidu',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE7730',
  },
  {
    name: 'Shruti Ashok Gopale',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE7986',
  },
  {
    name: 'Lalith V',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE9682',
  },
  {
    name: 'Isha Syed',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE9003',
  },
  {
    name: 'Abhiram Y',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE8444',
  },
  {
    name: 'Aditya Wilson',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE8002',
  },
  {
    name: 'Satya Sathwik',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE8492',
  },
  {
    name: 'Keerthi Chowdhary',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE7561',
  },
  {
    name: 'Aditya Sultania',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCB7114',
  },
  {
    name: 'V Priyachandini',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE9972',
  },
  {
    name: 'Kushal V',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE7484',
  },
  {
    name: 'Darin Joseph',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE7919',
  },
];

const TechT = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div>
        <Navbar/>
        <BackButton/>
        <h1 className='h1s'>Technical Team</h1>
        <br/>
      <div className="row">
        {/* Lead */}
        <div className="col-md-6">
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
        <div className="col-md-6">
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
                <a href={teamMembers[1].github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Other Team Members */}
      {/* Team Information Table */}
      <div className='tb2'>
      <h2 className='h1s'>Members</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Registration</th>
            <th>Connect At</th>
            
            
          </tr>
        </thead>
        <tbody>
          {teamMembers.slice(2).map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
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

export default TechT;
