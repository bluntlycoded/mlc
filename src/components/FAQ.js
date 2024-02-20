// src/FAQ.js
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    { question: 'What is Machine Learning Club?', answer: 'A club for anyone interested in machine learning, from beginners to experts. We provide opportunities to learn, share knowledge, and network with others passionate about the field.' },
    { question: 'How can I get involved in the club?', answer: 'Attend an event, contact the club leadership, or join our online community.' },
    { question: 'What kind of projects does the club work on?', answer: 'The projects vary depending on member interests and expertise. We can help you find teammates and resources for your project idea.' },
    { question: 'What resources are available for beginners in the Machine Learning Club?', answer: 'We provide resources such as introductory workshops, online tutorials, recommended reading lists, and mentorship opportunities to support beginners in learning machine learning concepts and techniques.' },
    
    
    
    // Add more FAQ items as needed
  ];

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title h1s">Frequently Asked Questions</h1>
      <ul className="faq-list">
        {faqData.map((faq, index) => (
          <li
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            <strong className="faq-question">{faq.question}</strong>
            <p className="faq-answer">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
