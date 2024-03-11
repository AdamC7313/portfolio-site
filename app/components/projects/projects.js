'use client';
import React, { useState } from "react";
import "./projects.css";

const Projects = () => {

  const [flip, setFlip] = useState(false);

  function handleClick() {
    var win = window.open('https://adamc7313.github.io/gents-brochure/', '_blank');
    win.focus();
  }

  return (
    <div className="projects-container" id="projects">
      <h2>projects</h2>
      <div className="project-1-container" onMouseEnter={() => setFlip(true)} onMouseLeave={() => setFlip(false)}>
        <div className={`project-card ${flip ? "flip" : ""}`} onClick={() => handleClick()} >
        <div className="front pic-1">
        </div>
        <div className="back">Gent&apos;s Classic Cuts Brochure Website is a showcase of my proficiency in web development using the core technologies of web development: JavaScript, CSS, and HTML. The website serves as an online brochure for a local barber shop, Gent&apos;s Classic Cuts, providing essential information about the services offered, the team, and contact details. The project is optimized for seamless viewing on tablets and phones.</div>
        </div>
        </div>
    </div>
  );
};

export default Projects;
