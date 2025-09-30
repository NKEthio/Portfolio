// src/data/projectsData.js

// Import images if they are in src/assets (Vite handles this)
// import projImg1 from '../assets/images/project1.jpg';

const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce site built with React, Node.js, and Stripe integration for payments.",
      imageUrl: "/placeholder-project.png", // Use image from public folder
      // imageUrl: projImg1, // Or use imported image from assets
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe", "CSS Modules"],
      liveUrl: "https://example.com", // Link to live demo
      repoUrl: "https://github.com/NKEthio/project-repo", // Link to GitHub repo
    },
    {
      id: 2,
      title: "Interactive Data Dashboard",
      description: "A dashboard displaying real-time data using Chart.js and fetching data from a REST API.",
      imageUrl: "/placeholder-project.png",
      tags: ["React", "Chart.js", "REST API", "Material UI", "Vite"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/NKEthio/project-repo",
    },
    {
      id: 3,
      title: "Portfolio Website V1",
      description: "My previous portfolio site, built with vanilla HTML, CSS, and JavaScript.",
      imageUrl: "/placeholder-project.png",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/NKEthio/project-repo",
    },
     {
      id: 4,
      title: "Task Management App",
      description: "A simple CRUD application for managing daily tasks, featuring local storage persistence.",
      imageUrl: "/placeholder-project.png",
      tags: ["React", "Local Storage", "CSS Grid", "Hooks"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/NKEthio/project-repo",
    },
    // Add more projects as needed
  ];
  
  export default projects;