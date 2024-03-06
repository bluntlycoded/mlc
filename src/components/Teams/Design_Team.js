// DesignT.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram,faGithub} from '@fortawesome/free-brands-svg-icons';
import './Teams.css'
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import BackButton from '../common/BackButton';
const teamMembers = [
  {
    name: 'N Jahnavi',
    position: 'Team Lead',
    imageUrl: 'lead.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/lead-linkedin/',
    instagram: 'https://www.instagram.com/lead-instagram/',
  },
  {
    name: 'Rithwik Stambamkadi',
    position: 'Team Lead',
    imageUrl: 'lead.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/lead-linkedin/',
    instagram: 'https://www.instagram.com/lead-instagram/',
  },
  {
    name: 'Veekshita Pilli',
    position: 'Team Co-Lead',
    imageUrl: 'colead.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/colead-linkedin/',
    instagram: 'https://www.instagram.com/colead-instagram/',
    registration: '23BCE7769'
  },
  // Add more team members as needed
  {
    name: 'Samyata',
    position: 'Member',
    imageUrl: 'member1.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    registration: '21BCE7075',
  },
  {
    name: 'Sumit Kumar',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: '23BCE8816',
  },
  {
    name: 'Herbert George',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: '22BCE7969',
  },
  {
    name: 'Tejaswini',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: '23BCE9621',
  },
  {
    name: 'Sirisha Lolla',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: '22BCE7790',
  },
  {
    name: 'Sri Lakshmi Andey',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: '22BCE9243',
  },
  {
    name: 'T Koojitha',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: '22BCE7087',
  },
  {
    name: 'Alaparthi Teja Sree',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: '23BCE7311',
  },
  {
    name: 'Rudransh Garg',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: '23BCE7727',
  },
  {
    name: 'Sangeeth',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: '22BCE8052',
  },
  {
    name: 'Arun.K',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: '23BCE9109',
  },
  {
    name: 'M Sanhitha',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: '23BCE7322',
  },
  {
    name: 'T Anuhya',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: '22BCE9234',
  },
  {
    name: 'D.Sai Sujan',
    position: 'Member',
    imageUrl: 'member2.jpg', // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: '22BCE7813',
  },
];

const DesignT = () => {
  return (
    <div>
        <Navbar/>
        <BackButton/>
        <h1 className='h1s'>Design Team</h1>
    <div className='row-parent'>
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
          {teamMembers.slice(3).map((member, index) => (
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

export default DesignT;
