// AdminT.js
import {React,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons';
import './Teams.css'
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import BackButton from '../common/BackButton';
import faculty from "../Images/Teams/faculty.jpeg";
import president from '../Images/Teams/irfan.jpeg'
import md from '../Images/Teams/MD.jpeg';
import mgrt from '../Images/Teams/Mgr_Tech.jpg';
import cominc from '../Images/Teams/Com_Inc.jpg';
import sec from '../Images/Teams/SEC.png';
import vch from '../Images/Teams/vch.jpeg'
import vyk from '../Images/Teams/vyk.jpeg'
import suleman from '../Images/Teams/suleman.jpeg'
import sanya from '../Images/Teams/sanya.png'
import lalitha from '../Images/Teams/lalitha.jpeg'
const facultyco = [
  {
    name: 'Dr. Khasim Syed',
    position: 'Faculty Co-Ordinator',
    imageUrl: faculty, // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/lead-linkedin/',
    instagram: 'https://www.instagram.com/lead-instagram/',
  },];
const teamMembers = [
  {
    name: 'Irfan Sadiq Rahat',
    position: 'President',
    imageUrl: president, // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/lead-linkedin/',
    instagram: 'https://www.instagram.com/lead-instagram/',
  },
  {
    name: 'Hritwik Ghosh',
    position: 'Vice President',
    imageUrl: vch, // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/colead-linkedin/',
    instagram: 'https://www.instagram.com/colead-instagram/',
  },
  {
    name: 'Sanya Sooraj Sadanand',
    position: 'Vice President',
    imageUrl: sanya, // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/colead-linkedin/',
    instagram: 'https://www.instagram.com/colead-instagram/',
  },
  // Add more team members as needed
  {
    name: 'V Yashasvi Koushik',
    position: 'Club Advisor',
    imageUrl: vyk, // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member1-linkedin/',
    instagram: 'https://www.instagram.com/member1-instagram/',
    registration: 'Registration 1',
  },
  {
    name: 'Abu Suleman Khan',
    position: 'Club Advisor',
    imageUrl: suleman, // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: 'Registration 2',
  },
  {
    name: 'Sathwik Sangani',
    position: 'Managing Director',
    imageUrl: md, // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: '22BCE7808',
  },
  {
    name: 'Uthra Balakrishna',
    position: 'Club Secratary',
    imageUrl: sec, // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: '22BCB7134',
  },
  {
    name: 'Rajesh Andra',
    position: 'Opreations Manager Technical',
    imageUrl: mgrt, // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: '22BCE7089',
    github: '',
  },
  {
    name: 'Lalitha',
    position: 'Club Manager',
    imageUrl: lalitha, // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: '21BCE9560',
  },
  {
    name: 'Garima Baid',
    position: 'Communications Incharge',
    imageUrl: cominc, // Replace with the actual image URL
    linkedin: 'https://www.linkedin.com/in/member2-linkedin/',
    instagram: 'https://www.instagram.com/member2-instagram/',
    registration: '22BCE8815',
  },
];

const AdminT = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div>
        <Navbar/>
        <BackButton/>
        <h1 className='h1s'>Admin Team</h1>
      <div className="row-parent">
        {/* FACULTY CO-ORDINATOR-01 */}
        <div className='row'>
      <div className="col-md-6">
          <div className="card">
            <img src={facultyco[0].imageUrl} className="card-img-top" alt={facultyco[0].name} />
            <div className="card-body">
              <h5 className="card-title">{facultyco[0].name}</h5>
              <p className="card-text">{facultyco[0].position}</p>
              <div className="social-icons">
                <a href={facultyco[0].linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={facultyco[0].instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <br/>
              <button className="learn-more-button">Know More</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h1 className='h1s'>About Dr. Khasim</h1>
          <p className='h2s'>
          Dr. Khasim Syed, the esteemed Faculty Coordinator of the Machine Learning Club at VIT-AP, is a distinguished expert with a focus on Network Security & Cryptography, Data & Web Mining, Software Engineering, Software Quality Assurance, and Human-Computer Interaction. His versatile specialization areas highlight his commitment to advancing technology and fostering a holistic understanding of machine learning. With a wealth of knowledge and a passion for educating the next generation, Dr. Syed plays a pivotal role in shaping the minds of aspiring students, contributing significantly to the academic landscape at VIT-AP. His dedication to various facets of computer science makes him an invaluable asset to the institution.
          </p> </div>
        </div>
<div className="row">
  <h1 className='h1s'>Club Advisors</h1>
        {/* ADVISOR-01 */}
      <div className="col-md-6">
          <div className="card">
            <img src={teamMembers[3].imageUrl} className="card-img-top" alt={teamMembers[4].name} />
            <div className="card-body">
              <h5 className="card-title">{teamMembers[3].name}</h5>
              <p className="card-text">{teamMembers[3].position}</p>
              <div className="social-icons">
                <a href={teamMembers[3].linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={teamMembers[3].instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <br/>
              <button className="learn-more-button">Know More</button>
            </div>
          </div>
        </div>
        
        {/* ADVISOR-02 */}
        <div className="col-md-6">
          <div className="card">
            <img src={teamMembers[4].imageUrl} className="card-img-top" alt={teamMembers[4].name} />
            <div className="card-body">
              <h5 className="card-title">{teamMembers[4].name}</h5>
              <p className="card-text">{teamMembers[4].position}</p>
              <div className="social-icons">
                <a href={teamMembers[4].linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={teamMembers[4].instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <br/>
              <button className="learn-more-button">Know More</button>
            </div>
          </div>
        </div>
        </div>
        <h1 className='h1s'>President & Vice President</h1>
        {/* Lead */}
        <div className='main-lead'>
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
            <img src={teamMembers[2].imageUrl} className="card-img-top" alt={teamMembers[2].name} />
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
      </div>
      {/* Other Team Members */}
      <h1 align="center" className='ssd'>Team Members</h1>
      {/* Team Information Table */}
      
       {/* ADVISOR-01 */}
       <div className='row-parent'>
       <div className='row'>
       <div className="col-md-4">
          <div className="card">
            <img src={teamMembers[5].imageUrl} className="card-img-top" alt={teamMembers[5].name} />
            <div className="card-body">
              <h5 className="card-title">{teamMembers[5].name}</h5>
              <p className="card-text">{teamMembers[5].position}</p>
              <div className="social-icons">
                <a href={teamMembers[5].linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={teamMembers[5].instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <br/>
              <button className="learn-more-button">Know More</button>
            </div>
          </div>
        </div>
        
        {/* ADVISOR-02 */}
        <div className="col-md-4">
          <div className="card">
            <img src={teamMembers[6].imageUrl} className="card-img-top" alt={teamMembers[6].name} />
            <div className="card-body">
              <h5 className="card-title">{teamMembers[6].name}</h5>
              <p className="card-text">{teamMembers[6].position}</p>
              <div className="social-icons">
                <a href={teamMembers[6].linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={teamMembers[6].instagram} target="_blank" rel="noopener noreferrer">
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
            <img src={teamMembers[7].imageUrl} className="card-img-top" alt={teamMembers[7].name} />
            <div className="card-body">
              <h5 className="card-title">{teamMembers[7].name}</h5>
              <p className="card-text">{teamMembers[7].position}</p>
              <div className="social-icons">
                <a href={teamMembers[7].linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={teamMembers[7].instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href={teamMembers[7].github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <br/>
              <button className="learn-more-button">Know More</button>
            </div>
          </div>
        </div>
      </div>
        {/* TM- */}
        <div className='row'>
        <div className="col-md-4">
          <div className="card">
            <img src={teamMembers[8].imageUrl} className="card-img-top" alt={teamMembers[8].name} />
            <div className="card-body">
              <h5 className="card-title">{teamMembers[8].name}</h5>
              <p className="card-text">{teamMembers[8].position}</p>
              <div className="social-icons">
                <a href={teamMembers[8].linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={teamMembers[8].instagram} target="_blank" rel="noopener noreferrer">
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
            <img src={teamMembers[9].imageUrl} className="card-img-top" alt={teamMembers[9].name} />
            <div className="card-body">
              <h5 className="card-title">{teamMembers[9].name}</h5>
              <p className="card-text">{teamMembers[9].position}</p>
              <div className="social-icons">
                <a href={teamMembers[9].linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={teamMembers[9].instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <br/>
              <button className="learn-more-button">Know More</button>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AdminT;
