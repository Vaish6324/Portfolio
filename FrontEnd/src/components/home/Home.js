import React from "react";
import "./Home.css";
import About from "../about/About";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <h2>Hi, I'm Vaishnavi Patil</h2>
        <p>Welcome to my portfolio. Scroll down to know more about me!</p>
        <p className="intro-description">
          I am a passionate developer with expertise in front-end and back-end
          technologies. I love building innovative and user-friendly solutions.
        </p>
        <a href="#contact" className="cta-button">
          Contact Me
        </a>
      </section>
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
