import React from 'react';
import './ContactUs.css'; // Create a corresponding CSS file for styling
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import logo from '../components/Images/removebg.png'

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <Navbar />
      <header>
        <h1>Contact Us</h1>
        <p>Get in touch with us for any inquiries or feedback.</p>
      </header>
      <div className="columns">
      <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
      <section className="contact-form">
        <h2>Send us a Message</h2>
        <form action='https://formsubmit.co/rahuln9261@gmail.com'method='POST'>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" required />

          <button type="submit">Send Message</button>
        </form>
      </section>
      </div>
      <div style={{ flex: 1 }}>
      <section className="contact-info">
        
        <h2>Contact Information</h2>
        <img src={logo} alt='logoimg'/>
        <p>
          Feel free to reach out to us using the contact information below:
        </p>
        <address>
          <p><b>Email</b>: ML.club@vitap.ac.in</p>
          <p><b>Phone</b>: 9876543210</p>
          <p><b>Address</b>: VIT-AP Campus G-30 Ainavolu Thullur Guntur AP-522237</p>
        </address>
      </section>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ContactUs;