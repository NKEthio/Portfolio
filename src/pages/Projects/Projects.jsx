// src/pages/Projects/Projects.jsx
import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projectsData from '../../data/projectsData'; // Import the data
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';

function Projects() {
  return (
    <AnimatedPage>
      <section className={`${styles.projectsSection} section-padding`}>
        <div className="container">
          <h2 className={styles.title}>My <span className="highlight">Creations</span></h2>
          <p className={styles.intro}>
            Here's a selection of projects I've worked on. Hover over the cards for links!
          </p>
          <div className={styles.projectsGrid}>
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}

export default Projects;