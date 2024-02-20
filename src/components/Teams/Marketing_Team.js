// MarketingT.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons';
import './Teams.css'
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
const teamMembers = [
  {
    name: 'Preran',
    position: 'Team Lead',
    imageUrl: 'lead.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/lead-linkedin/',
    instagram: 'https://www.instagram.com/lead-instagram/',
    registration: '22BCE8455'
  },
  {
    name: 'Preetham Reddy',
    position: 'Co-Team Lead',
    imageUrl: 'colead.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/colead-linkedin/',
    instagram: 'https://www.instagram.com/colead-instagram/',
    registration:'22BCE7425'
  },
  // Add more team members as needed
  {
    name: 'V V Chalapathi',
    position: 'Member',
    imageUrl: 'member.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    github: 'https://github.com/member1-github/',
    registration: '22BCE8027',
  },
  {
    name: 'M V K Ganga Raju',
    position: 'Memeber',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE8926',
  },
  {
  name: 'V.Ashritha',
    position: 'Memeber',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE7181',
  },
  {
    name: 'Sai Priyanka',
    position: 'Memeber',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE7359',
  },
  {
    name: 'Anjali',
   position: 'Memeber',
   imageUrl: 'member2.jpg', // Replace with the actual image URL
   linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
   instagram: 'https://www.instagram.com/member2-instagram/',
   github: 'https://github.com/member2-github/',
   registration: '23BCE8077',
},
{
    name: 'Preetham nuka',
    position: 'Memeber',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23MIS7015',
  },
  {
    name: 'Lakshya Doredla',
    position: 'Memeber',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '22BCE8079',
  },
  {
    name: 'R Laxmi Sindhura',
    position: 'Memeber',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23MIS7058',
  },
  {name: 'Varsha B ',
  position: 'Memeber',
  imageUrl: 'member2.jpg', // Replace with the actual image URL
  linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
  instagram: 'https://www.instagram.com/member2-instagram/',
  github: 'https://github.com/member2-github/',
  registration: '23BCE9687',
},
{
  name: 'K Venkata Tarun',
    position: 'Memeber',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE7075',
  },
  {
    name: 'G.V.L Lasya Priya',
    position: 'Memeber',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    github: 'https://github.com/member2-github/',
    registration: '23BCE9070',
  },
  
];

const MarketingT = () => {
  return (
    <div>
        <Navbar/>
        <h1 className='h1s'>Marketing Team</h1>
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
      <Footer/>
    </div>
  );
};

export default MarketingT;