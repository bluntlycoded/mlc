import React from 'react';
import './AboutUs.css'; // Create a corresponding CSS file for styling
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import FAQ from './FAQ';
import BackButton from './common/BackButton';

const AboutUs = () => {
  return (
    <div className="about-us-container">
       <Navbar/>
       <BackButton/>
      <header>
        <h1>Welcome to Our Organization</h1>
        <p>Discover Our Story and Mission</p>
      </header>
      <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
      <section className="overview">
        <h2>Who We Are</h2>
        <p className='abp'>
        Welcome to the Machine Learning Club (MLC) at VIT AP! We are a vibrant and passionate community of AI enthusiasts devoted to exploring the expansive realm of machine learning and artificial intelligence. Our diverse group is united by a shared dedication to fostering collaboration, curiosity, and innovation. At MLC, we believe in creating an inclusive environment where everyone, regardless of their expertise level, can contribute and grow. Driven by students deeply interested in AI, our club serves as a melting pot of ideas and skills, forming a community that values the limitless possibilities of AI.
        </p>
      </section>
      </div>
      <div style={{ flex: 1 }}>
        {/* Content for the second column */}
        <section className="history">
        <h2>Our History</h2>
        <p className='abp'>
        MLC's journey began with a vision to redefine possibilities in Machine Learning,Web and App Development and UI/UX Design. Rooted in a commitment to pushing boundaries, we have evolved into a community united by innovation and excellence. Our history reflects the collaborative efforts of individuals deeply passionate about AI, working together to create a space where groundbreaking ideas are nurtured, and transformative innovations take shape. From our inception, we have embraced an environment that encourages the exploration of cutting-edge AI concepts and the practical application of that knowledge to real-life scenarios.
        </p>
      </section>
      <section className='dns'>
      <FAQ/>
      </section>
     

      </div>
    </div>      
      {/* Add more sections for team, values, achievements, etc. */}
      <Footer/>
    </div>
  );
};

export default AboutUs;
