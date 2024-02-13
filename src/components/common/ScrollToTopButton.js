// ScrollToTopButton.js

import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Import the CSS file

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check if the button should be visible
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 300;

      if (scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <span className="arrow-icon">&#9650;</span>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
