// src/pages/NotFound/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';


function NotFound() {
  return (
    <AnimatedPage>
      <div className={`${styles.notFoundContainer} section-padding`}>
        <div className="container">
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.message}>Oops! Page Not Found</h2>
          <p className={styles.description}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className={styles.homeButton}>
            Go Back Home
          </Link>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default NotFound;