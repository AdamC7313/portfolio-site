import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-title">skills</h2>
      <h3 className="skill-subhead">frontend</h3>
      <div className="skill-bucket">
        <span className="skill-item">HTML5</span>
        <span className="skill-item">CSS3</span>
        <span className="skill-item">JavaScript</span>
        <span className="skill-item">TypeScript</span>
        <span className="skill-item">React</span>
        <span className="skill-item">Redux</span>
        <span className="skill-item">Next.js</span>
      </div>
      <h3 className="skill-subhead">backend</h3>
      <div className="skill-bucket">
        <span className="skill-item">SQL</span>
        <span className="skill-item">NoSQL</span>
        <span className="skill-item">Node.js</span>
        <span className="skill-item">Express.js</span>
        <span className="skill-item">MongoDB</span>
        <span className="skill-item">Python</span>
        <span className="skill-item">Java</span>
        <span className="skill-item">C#</span>
      </div>
      <h3 className="skill-subhead">other</h3>
      <div className="skill-bucket">
        <span className="skill-item">TDD</span>
        <span className="skill-item">MVC Design</span>
        <span className="skill-item">Agile Development</span>
        <span className="skill-item">Unit Testing</span>
        <span className="skill-item">Mocha/Chai</span>
        <span className="skill-item">Jest</span>
        <span className="skill-item">WordPress</span>
      </div>
    </div>
  );
};

export default Skills;
