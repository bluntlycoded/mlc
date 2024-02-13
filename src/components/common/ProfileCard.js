import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ imageUrl, name, position, linkedin, instagram, github, onMessageClick }) => {
  return (
    <div style={styles.card}>
      <img src={imageUrl} alt="Profile" style={styles.image} />
      <div style={styles.details}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.position}>{position}</p>
        <div style={styles.socialLinks}>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
          <a href={instagram} target="_blank" rel="noopener noreferrer" style={styles.link}>Instagram</a>
          <a href={github} target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub</a>
        </div>
        <button onClick={onMessageClick} style={styles.messageButton}>Send a Message</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '200px',
    borderRadius: '50%',
    marginBottom: '16px',
  },
  details: {
    textAlign: 'center',
  },
  name: {
    fontSize: '1.5rem',
    margin: '0',
  },
  position: {
    color: '#555',
    margin: '8px 0',
  },
  socialLinks: {
    margin: '8px 0',
  },
  link: {
    margin: '0 8px',
    color: '#0077b5', // LinkedIn color
    textDecoration: 'none',
  },
  messageButton: {
    backgroundColor: '#4CAF50', // Green color
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '16px',
  },
};

export default ProfileCard;
