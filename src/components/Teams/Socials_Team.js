// SocialsT.js
import {React,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram,} from '@fortawesome/free-brands-svg-icons';
import './Teams.css'
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import BackButton from '../common/BackButton';
const teamMembers = [
  {
    name: 'Satyaprakash Swain',
    position: 'Associate Lead',
    imageUrl: 'lead.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/lead-linkedin/',
    instagram: 'https://www.instagram.com/lead-instagram/',
  },
  {
    name: 'Vaibhav Prakash',
    position: 'Associate Lead',
    imageUrl: 'colead.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/colead-linkedin/',
    instagram: 'https://www.instagram.com/colead-instagram/',
  },
  // Add more team members as needed
  {
    name: 'Gouthama Shiva',
    position: 'Member',
    imageUrl: 'member1.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '23MIS7184',
  },
  {
    name: 'Harsha',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE8747',
  },
  {
    name: 'Chandra Mouli',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE8202',
  },
  {
    name: 'G Sai Venkata Dheeraj',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE9581',
  },
  {
    name: 'C Sri Harshitha',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '21BCE9920',
  },
  {
    name: 'Rohitha Koganti',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '21BCE8540',
  },
  {
    name: 'N Teja Santhosh ',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE8159',
  },
  {
    name: 'Kailashjith C',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22MIC7110',
  },
  {
    name: 'M Nishanth R',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCB7042',
  },
  {
    name: 'T Tulasi Annapurna',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '21BCE7443',
  },
  {
    name: 'A Sadhana',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '21BCE9924',
  },

];

const SocialsT = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div>
        <Navbar/>
        <BackButton/>
        <h1 className='h1s'>Social Media Team</h1>
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
            <th>LinkedIn</th>
            <th>Instagram</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.slice(2).map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.registration}</td>
              <td>{member.linkedin}</td>
              <td>{member.instagram}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Footer/>
    </div>
  );
};

export default SocialsT;
