// src/pages/Home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';

function Home() {
  return (
    <AnimatedPage>
      <div className={`${styles.homeHero} section-padding`}>
        <div className="container">
          <h1 className={styles.title}>
            Hi, I'm <span className="highlight">NUREDIN Kassaw</span>
          </h1>
          <h2 className={styles.subtitle}>
            Biomedical Engineering Student 
          </h2>
          <p className={styles.description}>
            I am a student and explorer with a passion for discovering my talents and making a positive impact in the world. With a keen interest in AI, I aspire to leverage technology to revolutionize healthcare and bring transformative change to my country.
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/projects" className={styles.ctaPrimary}>
              View My Work
            </Link>
            <Link to="/contact" className={styles.ctaSecondary}>
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
      {/* You could add more sections here, like featured projects or skills overview */}
    </AnimatedPage>
  );
}

export default Home;