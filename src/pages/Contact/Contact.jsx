// src/pages/Contact/Contact.jsx
import React from 'react';
import styles from './Contact.module.css';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';

function Contact() {
  // Basic obfuscation for email - replace with your actual email parts
  const emailUser = 'nuredinkassaw599@gmail.com';
  const emailDomain = 'example.com';

  return (
    <>
    <AnimatedPage>
      <section className={`${styles.contactSection} section-padding`}>
        <div className="container">
          <h2 className={styles.title}>Get In <span className="highlight">Touch</span></h2>
          <p className={styles.intro}>
            I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <h3>Email</h3>
              {/* Simple mailto link - consider a contact form for production to avoid spam */}
              <a href={`mailto:${emailUser}@${emailDomain}`} className={styles.contactLink}>
                {emailUser}@{emailDomain}
              </a>
            </div>

            <div className={styles.infoItem}>
              <h3>Connect</h3>
              {/* Add links to your social/professional profiles */}
              <div className={styles.socialLinks}>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
                {/* Add more links (Twitter, etc.) */}
              </div>
            </div>

             {/* Optional: Placeholder for a contact form */}
             
            {/* <div className={styles.contactForm}>
               <h3>Send me a message</h3>
               <p>Contact form coming soon! For now, please use the email above.</p>
            </div> */}
          </div>
        </div>
      </section>
    </AnimatedPage>
    </>
  );
}

export default Contact;