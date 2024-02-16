// src/Blogs.js
import React from 'react';
import './FAQ.css'; // Reuse the same styles for simplicity

const Blogs = () => {
  const blogData = [
    { title: 'Getting Started with React', content: 'Learn the basics of React and set up your first project.' },
    { title: 'State Management in React', content: 'Explore different state management techniques in React.' },
    // Add more blog items as needed
  ];

  return (
    <div className="blogs-container">
      <h1 className="blogs-title">Blogs</h1>
      <ul className="blogs-list">
        {blogData.map((blog, index) => (
          <li key={index} className="blog-item">
            <strong className="blog-title">{blog.title}</strong>
            <p className="blog-content">{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
