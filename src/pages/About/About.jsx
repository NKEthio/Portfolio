// src/pages/About/About.jsx
import React from 'react';
import styles from './About.module.css';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
// Optional: import your profile picture
// import profilePic from '../../assets/images/profile.jpg';

function About() {
  return (
    <AnimatedPage>
      <section className={`${styles.aboutSection} section-padding`}>
        <div className="container">
          <h2 className={styles.title}>About <span className="highlight">Me</span></h2>
          <div className={styles.aboutContent}>
            {/* Optional Profile Picture */}
            {/* <img src={profilePic} alt="Your Name" className={styles.profilePic} /> */}

            <div className={styles.bio}>
              <p>
                Hello! I'm Nuredin, a passionate frontend developer based in Ethiopia.
                I specialize in creating intuitive, dynamic user interfaces using modern web technologies like React, Vue, and more.
              </p>
              <p>
                My journey into web development started during University. I love the blend of creativity and problem-solving involved in bringing designs to life on the web. I'm constantly learning and exploring new technologies to improve my skills.
              </p>
              <p>
                Key Skills: <span className={styles.skill}>React</span>, <span className={styles.skill}>JavaScript (ES6+)</span>, <span className={styles.skill}>HTML5</span>, <span className={styles.skill}>CSS3/Sass</span>, <span className={styles.skill}>Git</span>, <span className={styles.skill}>Responsive Design</span>, <span className={styles.skill}>APIs</span>, <span className={styles.skill}>python</span>, <span className={styles.skill}>Java</span>.
              </p>
              <p>
                When I'm not coding, I enjoy playing chess, watching nature documentaries and reading books.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}

export default About;