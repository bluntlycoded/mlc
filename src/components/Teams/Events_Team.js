// EventsT.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons';
import './Teams.css'
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import BackButton from '../common/BackButton';
const teamMembers = [
  {
    name: 'Rishika Ghosh',
    position: 'Team Lead',
    imageUrl: 'lead.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/lead-linkedin/',
    instagram: 'https://www.instagram.com/lead-instagram/',
  },
  {
    name: 'Vallabh S Ghantasala',
    position: 'Team Lead',
    imageUrl: 'colead.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/colead-linkedin/',
    instagram: 'https://www.instagram.com/colead-instagram/',
  },
  // Add more team members as needed
  {
    name: 'Chitoor Karthik Kumar',
    position: 'Member',
    imageUrl: 'member1.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '23BCE9629',
  },
  {
    name: 'Ketan Agarwal',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE8178',
  },
  {
    name: 'Adhithya Raviprakash',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCB7141',
  },
  {
    name: 'J. Sunira',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BBA7036',
  },
  {
    name: 'S Sree Sai Vardhan',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE8186',
  },
  {
    name: 'Aarnav Naidu',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE7735',
  },
  {
    name: 'Gunabhiram',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE9250',
  },
  {
    name: 'Ambati Gagan Sandeep',
    position: 'Member',
    imageUrl: 'member8.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '22BCB7262',
  },
  {
    name: 'N Chetan Sai',
    position: 'Member',
    imageUrl: 'member9.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '23BEC7010',
  },
  {
    name: 'Mano Vignesh',
    position: 'Member',
    imageUrl: 'member10.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '22BCE8864',
  },
  {
    name: 'Sifatul Islam Tamim',
    position: 'Member',
    imageUrl: 'member11.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '22BCE20246',
  },
  {
    name: 'Sushma Elisala',
    position: 'Member',
    imageUrl: 'member12.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '21BCE9623',
  },
  {
    name: 'Krishna Jha',
    position: 'Member',
    imageUrl: 'member13.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '22BCE7788',
  },
  {
    name: 'Moka Lakshya Chandrika',
    position: 'Member',
    imageUrl: 'member14.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '22BCE8360',
  },
  {
    name: 'Shanmukh',
    position: 'Member',
    imageUrl: 'member15.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '22BCE7829',
  },
  {
    name: 'D Lakshmi Raghu Prasad',
    position: 'Member',
    imageUrl: 'member16.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BME7077',
  },
  {
    name: 'Sneha Sree',
    position: 'Member',
    imageUrl: 'member17.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCB7068',
  },
  {
    name: 'Sanjeevani Pandit',
    position: 'Member',
    imageUrl: 'member18.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE8802',
  },
  {
    name: 'Sneha Agarwal',
    position: 'Member',
    imageUrl: 'member19.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE9288',
  },
  {
    name: 'R Joshua Nicholas',
    position: 'Member',
    imageUrl: 'member20.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE8212',
  },
  {
    name: 'Arnav Kaushik',
    position: 'Member',
    imageUrl: 'member21.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCB7154',
  },
  {
    name: 'Prashant Sharma',
    position: 'Member',
    imageUrl: 'member22.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE7210',
  },
  {
    name: 'Sonakshi',
    position: 'Member',
    imageUrl: 'member23.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE7231',
  },
  {
    name: 'Adithya Kumar',
    position: 'Member',
    imageUrl: 'member24.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE7208',
  },
  {
    name: 'Sai Koushik',
    position: 'Member',
    imageUrl: 'member25.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23MIS7189',
  },
  {
    name: 'Malapati Saketh Reddy',
    position: 'Member',
    imageUrl: 'member26.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE20347',
  },
  {
    name: 'Shaik Mohammad Sadik',
    position: 'Member',
    imageUrl: 'member27.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE8319',
  },
  {
    name: 'P Nagasindhu ',
    position: 'Member',
    imageUrl: 'member28.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BEC7111',
  },
  {
    name: 'T Vamshika',
    position: 'Member',
    imageUrl: 'member29.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCB7123',
  },
  {
    name: 'Pragnya Neerukonda',
    position: 'Member',
    imageUrl: 'member30.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE7277',
  },
];

const EventsT = () => {
  return (
    <div>
        <Navbar/>
        <BackButton/>
        <h1 className='h1s'>Event Management Team</h1>
      <div className='row-parent'>
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

export default EventsT;
