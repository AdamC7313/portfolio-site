import React from "react";
import "./projects.css";

const projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h2>projects</h2>
      <div className="projects-grid">
        <div className="project-pic">
          <p>Pic</p>
        </div>
        <div className="projects-desc">Project Description</div>
        <div className="project-pic">Pic2</div>
        <div className="projects-desc">Project Description2</div>
        <div className="project-pic">Pic3</div>
        <div className="projects-desc">Project Description3</div>
      </div>
    </div>
  );
};

export default projects;
