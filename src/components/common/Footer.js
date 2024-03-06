// Footer.js

import React from 'react';
import './Footer.css'; // Create a corresponding CSS file for styling
import instagram from '../Images/insta.png'
import linkedin from '../Images/linkedin.png'
import youtube from '../Images/youtube.png'
import EmailSubscription from './EmailSubscription';
const Footer = () => {
  return (
    <footer className="footer">
      <hr/>
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact Us</h2>
        <address>
          <p><b>Email</b>: ML.club@vitap.ac.in</p>
          <p><b>Address</b>: VIT-AP Campus G-30 Ainavolu Thullur Guntur AP-522237</p>
        </address>
        </div>

        <div className="footer-section">
          <h2>Quick Links</h2>
         <EmailSubscription/>
        </div>

        <div className="footer-section">
          <h2>Follow Us</h2>
          {/* Add social media icons/links */}
          <div className="social">
                        <a href="https://www.instagram.com/mlc_vitap" target='__blank'><img src={instagram} width={90} className='imgcv' alt='ty' /></a>
                        <a href="https://www.linkedin.com/company/machine-learning-club-vitap/"><img src={linkedin} width={90} className='imgcv' alt='ty'/></a>
                        <a href="https://www.youtube.com/@MLCVIT-AP"><img src={youtube} width={90} className='imgcv' alt='ty'/></a>
                    </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 The Machine Learning Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
