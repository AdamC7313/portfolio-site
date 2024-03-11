import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-title">skills</h2>
      <div className="skill-bucket">
        <h3 className="skill-subhead">front end</h3>
        <span className="skill-item">HTML5</span>
        <span className="skill-item">CSS3</span>
        <span className="skill-item">JavaScript</span>
        <span className="skill-item">TypeScript</span>
        <span className="skill-item">React</span>
        <span className="skill-item">Redux</span>
        <span className="skill-item">Next</span>
      </div>
      <div className="skill-bucket">
        <h3 className="skill-subhead">back end</h3>
        <span className="skill-item">SQL</span>
        <span className="skill-item">Nodejs</span>
        <span className="skill-item">Express</span>
        <span className="skill-item">MongoDB</span>
        <span className="skill-item">Python</span>
      </div>
      <div className="skill-bucket">
        <h3 className="skill-subhead">Other</h3>
        <span className="skill-item">TDD</span>
        <span className="skill-item">MVC Design</span>
        <span className="skill-item">Agile Development</span>
      </div>
    </div>
  );
};

export default Skills;
