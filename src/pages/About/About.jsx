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
                Hello! I'm NUREDIN Kassaw, a Biomedical Engineering student at Addis Ababa University (2022 – Present).
                I am a student and explorer with a passion for discovering my talents and making a positive impact in the world. My ambition drives me to seek creative solutions and contribute meaningfully to society.
              </p>
              <p>
                With a keen interest in AI, I aspire to leverage technology to revolutionize healthcare and bring transformative change to my country. I am dedicated, innovative, and always eager to learn and grow.
              </p>
              <p>
                Key Skills: <span className={styles.skill}>Python Programming</span>, <span className={styles.skill}>PyTorch</span>, <span className={styles.skill}>HTML</span>, <span className={styles.skill}>CSS</span>, <span className={styles.skill}>JavaScript</span>, <span className={styles.skill}>ReactJS</span>, <span className={styles.skill}>Problem Solving</span>, <span className={styles.skill}>Creativity</span>, <span className={styles.skill}>Critical Thinking</span>.
              </p>
              <p>
                <strong>Goals:</strong> Learn and apply AI to transform healthcare, participate in volunteer programs, and graduate to pursue impactful projects.
              </p>
              <p>
                <strong>Achievement:</strong> Top 3 in Hult Prize Competition (March 2024)
              </p>
              <p>
                When I'm not studying, I enjoy studying philosophy and history, and playing chess.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}

export default About;