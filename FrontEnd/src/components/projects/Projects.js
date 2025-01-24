import React from "react";
import "./Projects.css";

// Import images
import resumeImg from "./resume.jpg"; // Update path if needed
import mobileImg from "./mobile.jpg"; // Update path if needed
import signupImg from "./signup.jpg"; // Update path if needed

const Projects = () => {
  const projectData = [
    {
      name: "Resume Builder",
      description:
        "A simple resume builder where users can input their data and download a formatted resume as a PDF.",
      image: resumeImg, // Reference the imported image
      vercelLink: "https://resumetemplate-sage.vercel.app/",
      githubLink: "https://github.com/Vaish6324/ResumeTemplate",
    },
    {
      name: "Mobile Authentication using Firebase",
      description:
        "An authentication system for mobile apps using Firebase for user registration and login with OTP.",
      image: mobileImg, // Reference the imported image
      vercelLink: "https://mobileauth.vercel.app/",
      githubLink: "https://github.com/Vaish6324/WEB-Projects",
    },
    {
      name: "Signup-Login Form (React + MongoDB)",
      description:
        "A signup and login system built with React and MongoDB Cluster, allowing users to register and log in securely.",
      image: signupImg, // Reference the imported image
      vercelLink: "https://frontend-iota-ecru.vercel.app/",
      githubLink: "https://github.com/Vaish6324/MERNProject",
    },
  ];

  return (
    <div className="projects" id="projects">
      <h2>My Projects</h2>
      <p>Here are some of the projects I have worked on:</p>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-buttons">
                <a href={project.vercelLink} target="_blank" rel="noopener noreferrer" className="button">
                  View on Vercel
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="button">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
