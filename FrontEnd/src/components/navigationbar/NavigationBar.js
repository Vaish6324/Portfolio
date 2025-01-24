import React from "react";
import { Link } from "react-scroll";
import "./NavigationBar.css";
import profilePic from "./profile.jpg";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <img 
      src={profilePic} 
      alt="Profile" 
      className="profile-pic" 
      />

        <h1>Vaishnavi Patil</h1>
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
