// src/data/projectsData.js

// Import images if they are in src/assets (Vite handles this)
// import projImg1 from '../assets/images/project1.jpg';

const projects = [
    {
      id: 1,
      title: "MedShop - Medical E-commerce",
      description: "A Next.js e-commerce platform for medical equipment with Firebase authentication, Firestore database, and role-based access (Admin, Seller, Buyer).",
      imageUrl: "/placeholder-project.png", // Use image from public folder
      // imageUrl: projImg1, // Or use imported image from assets
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "ShadCN/UI"],
      liveUrl: "", // Link to live demo
      repoUrl: "https://github.com/NKEthio/MedShop", // Link to GitHub repo
    },
    {
      id: 2,
      title: "Task Manager",
      description: "A simple and intuitive task management application for organizing daily tasks.",
      imageUrl: "/placeholder-project.png",
      tags: ["JavaScript", "HTML", "CSS", "Local Storage"],
      liveUrl: "",
      repoUrl: "https://github.com/NKEthio/Task-Manager",
    },
    {
      id: 3,
      title: "Trip - Travel Website",
      description: "A visually appealing travel website showcasing beautiful destinations with responsive design.",
      imageUrl: "/placeholder-project.png",
      tags: ["HTML", "CSS", "Responsive Design"],
      liveUrl: "",
      repoUrl: "https://github.com/NKEthio/Trip",
    },
     {
      id: 4,
      title: "Lost and Found",
      description: "A web application to help people find their lost items and report found items.",
      imageUrl: "/placeholder-project.png",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "",
      repoUrl: "https://github.com/NKEthio/LostAnfFound",
    },
    // Add more projects as needed
  ];
  
  export default projects;