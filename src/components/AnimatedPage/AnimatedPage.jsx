// src/components/AnimatedPage/AnimatedPage.jsx
import React from 'react';
import './AnimatedPage.css'; // Use a simple global CSS for this

const AnimatedPage = ({ children }) => {
  return <div className="page-transition">{children}</div>;
};

export default AnimatedPage;