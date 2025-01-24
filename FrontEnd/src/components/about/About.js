import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <h2>About Me</h2>
      <p className="about-intro">
        Here, you’ll discover more about who I am, the work I do, and the technical skills I’ve developed in programming and technology.
      </p>
      <div className="about-container">
        {/* Left Section: Information */}
        <div className="about-info">
          <p>
            Hi, I'm <span className="highlight">Vaishnavi Patil</span>, a passionate software developer and technology enthusiast. I specialize in building modern, user-centric web applications that deliver seamless experiences.
          </p>
          <p>
            My goal is to create impactful solutions that make a difference, whether through designing interactive user interfaces or solving complex backend challenges. I thrive on continuous learning and collaboration.
          </p>
        </div>

        {/* Right Section: Skills */}
        <div className="about-skills">
          <h3>My Skills</h3>
          <div className="skills-container">
            <div className="skill-box">HTML</div>
            <div className="skill-box">CSS</div>
            <div className="skill-box">JavaScript</div>
            <div className="skill-box">React</div>
            <div className="skill-box">Node.js</div>
            <div className="skill-box">MongoDB</div>
            <div className="skill-box">Git</div>
            <div className="skill-box">Bootstrap</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
