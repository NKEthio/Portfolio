// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>
          © {currentYear} Nuredin. All rights reserved.
          {/* Add social links here if desired */}
          {/* Example:
          <span className={styles.socialLinks}>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a> |
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </span>
          */}
        </p>
      </div>
    </footer>
  );
}

export default Footer;