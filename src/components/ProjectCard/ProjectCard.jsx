// src/components/ProjectCard/ProjectCard.jsx
import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ project }) {
  const { title, description, imageUrl, tags, liveUrl, repoUrl } = project;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={`${title} screenshot`} className={styles.image} loading="lazy" />
        <div className={styles.overlay}>
          <div className={styles.links}>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Live Demo
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;