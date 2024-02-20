// BackButton.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './BackButton.css'; // Import the CSS file

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Equivalent to goBack()
  };

  return (
    <button className="back-button" onClick={handleBackClick}>
      <FontAwesomeIcon icon={faArrowLeft} className="icon" size='lg'/>
    </button>
  );
};

export default BackButton;
