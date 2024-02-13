import React from 'react';
import './Events.css'; // Create a corresponding CSS file for styling
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import cds from './Images/cds.jpeg'

const Events = () => {
  const upcomingEventsData = [
    {
      id: 1,
      title: 'Get Out Escape Room',
      date: 'March 15, 2024',
      location: 'Virtual',
      description: 'Join us for an exciting tech conference featuring industry experts and cutting-edge technologies.',
      poster: cds, // Add the actual image path
    },
    {
      id: 2,
      title: 'CoderHunt-Hackathon',
      date: 'April 20-22, 2024',
      location: 'CB-IIEC',
      description: 'Participate in our annual hackathon and showcase your coding skills. Exciting prizes await!',
      poster: cds, // Add the actual image path
    },
    {
      id: 3,
      title: 'Hackathon 2024',
      date: 'April 20-22, 2024',
      location: 'Online',
      description: 'Participate in our annual hackathon and showcase your coding skills. Exciting prizes await!',
      poster: cds, // Add the actual image path
    },
    {
      id: 4,
      title: 'Hackathon 2024',
      date: 'April 20-22, 2024',
      location: 'Online',
      description: 'Participate in our annual hackathon and showcase your coding skills. Exciting prizes await!',
      poster: 'hackathon-poster.jpg', // Add the actual image path
    },
  
    // Add more upcoming events as needed
  ];

  const oldEventsData = [
    {
      id: 3,
      title: 'Machine Learning Workshop',
      date: 'January 10, 2024',
      location: 'Campus Auditorium',
      detailsLink: 'machine-learning-workshop-details', // Add the actual link/path
      photosLink: 'machine-learning-workshop-photos', // Add the actual link/path
    },
    {
      id: 4,
      title: 'Web Development Bootcamp',
      date: 'February 5, 2024',
      location: 'Online',
      detailsLink: 'web-development-bootcamp-details', // Add the actual link/path
      photosLink: 'web-development-bootcamp-photos', // Add the actual link/path
    },
    {
      id: 4,
      title: 'Web Development Bootcamp',
      date: 'February 5, 2024',
      location: 'Online',
      detailsLink: 'web-development-bootcamp-details', // Add the actual link/path
      photosLink: 'web-development-bootcamp-photos', // Add the actual link/path
    },
    {
      id: 4,
      title: 'Web Development Bootcamp',
      date: 'February 5, 2024',
      location: 'Online',
      detailsLink: 'web-development-bootcamp-details', // Add the actual link/path
      photosLink: 'web-development-bootcamp-photos', // Add the actual link/path
    },
    
    // Add more old events as needed
  ];

  const handleInfoClick = (eventId) => {
    // Placeholder logic for handling click for more information
    console.log(`More info clicked for event ${eventId}`);
  };

  const handleRegisterClick = (eventId) => {
    // Placeholder logic for handling click for registration
    console.log(`Register clicked for event ${eventId}`);
  };

  return (
    <div className="events-container">
      <Navbar />
      <header>
        <h1>Upcoming Events</h1>
        <p>Explore and join our upcoming events.</p>
      </header>

      <section className="events-list">
        {upcomingEventsData.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.poster} alt={event.title} className="event-poster" />
            <div className="event-details">
              <h2>{event.title}</h2>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p>{event.description}</p>
            </div>
            <div className="event-buttons">
              <button className="event-button" onClick={() => handleInfoClick(event.id)}>More Info</button>
              <button className="event-button" onClick={() => handleRegisterClick(event.id)}>Register</button>
            </div>
          </div>
        ))}
      </section>
<br/>
<br/> 
<h2 className='ods'>Old Events</h2>
      <section className="upcoming-events">
        {oldEventsData.map(event => (
          <div key={event.id} className="old-event-card">
            <div className="old-event-details">
              <h2>{event.title}</h2>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
            </div>
            <div className="old-event-buttons bef">
              <a href={event.detailsLink} target="_blank" rel="noopener noreferrer">
                <button className="event-button bbf">Event Details</button>
              </a>
              <a href={event.photosLink} target="_blank" rel="noopener noreferrer">
                <button className="event-button bbf">Event Photographs</button>
              </a>
            </div>
          </div>
        ))}
      </section>
      <Footer/>
    </div>
  );
};

export default Events;
