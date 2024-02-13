// Achievements.js

import React from 'react';
import './Achievements.css'; // Create a corresponding CSS file for styling
import Navbar from './common/Navbar';

const Achievements = () => {
  const recentAchievementsData = [
    {
      id: 1,
      title: 'Annual Innovation Award',
      date: 'March 2024',
      description: 'Received the Annual Innovation Award for outstanding contributions to technology and innovation.',
      image: 'path/to/innovation_image.jpg', // Replace with actual image path
    },
    {
      id: 2,
      title: 'Community Impact Award',
      date: 'April 2024',
      description: 'Recognized for making a significant impact on the local community through various initiatives.',
      image: 'path/to/community_image.jpg', // Replace with actual image path
    },
    // Add more recent achievements as needed
  ];

  const pastAchievementsData = [
    {
      id: 3,
      title: 'Best Event of the Year',
      date: '2023',
      description: 'Organized and executed the best event of the year, drawing widespread attention and participation.',
      image: 'path/to/event_image.jpg', // Replace with actual image path
    },
    {
      id: 4,
      title: 'Outstanding Volunteer Team',
      date: '2022',
      description: 'Acknowledged as the outstanding volunteer team for consistent dedication and hard work.',
      image: 'path/to/volunteer_image.jpg', // Replace with actual image path
    },
    // Add more past achievements as needed
  ];

  const handleReadMoreClick = (achievementId) => {
    // Placeholder logic for handling "Read More" click
    console.log(`Read More clicked for achievement ${achievementId}`);
  };

  return (
    <div className="achievements-container">
      <Navbar />
      <header>
        <h1>Achievements</h1>
        <p>Explore our recent and past achievements.</p>
      </header>

      <section className="recent-achievements">
        <h2>Recent Achievements</h2>
        {recentAchievementsData.map(achievement => (
          <div key={achievement.id} className="achievement-card">
            <img src={achievement.image} alt={`Achievement ${achievement.id}`} />
            <h3>{achievement.title}</h3>
            <p><strong>Date:</strong> {achievement.date}</p>
            <p>{achievement.description}</p>
            <button className="read-more-button" onClick={() => handleReadMoreClick(achievement.id)}>Read More</button>
          </div>
        ))}
      </section>

      <section className="past-achievements">
        <h2>Past Achievements</h2>
        {pastAchievementsData.map(achievement => (
          <div key={achievement.id} className="achievement-card">
            <img src={achievement.image} alt={`Achievement ${achievement.id}`} />
            <h3>{achievement.title}</h3>
            <p><strong>Date:</strong> {achievement.date}</p>
            <p>{achievement.description}</p>
            <button className="read-more-button" onClick={() => handleReadMoreClick(achievement.id)}>Read More</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Achievements;
