'use client';
import React, { useState } from "react";
import "./projects.css";

const Projects = () => {

  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);
  const [flip4, setFlip4] = useState(false);

  function handleClick1() {
    var win = window.open('https://adamc7313.github.io/gents-brochure/', '_blank');
    win.focus();
  }

  function handleClick1Code() {
    var win = window.open('gents863.com', '_blank');
    win.focus();
  }

  function handleClick2() {
    var win = window.open('https://adamc7313.github.io/weather-project/', '_blank');
    win.focus();
  }

  function handleClick2Code() {
    var win = window.open('https://github.com/AdamC7313/weather-project', '_blank');
    win.focus();
  }

  function handleClick3() {
    var win = window.open('https://github.com/AdamC7313/product-list/', '_blank');
    win.focus();
  }

  function handleClick4() {
    var win = window.open('https://fetchinglooks.com/', '_blank');
    win.focus();
  }


  return (
    <div className="projects-container" id="projects">
      <p className='project-byline'>Hover over/tap picture for languages and technologies used.</p>
      <div className='project'>
        <div className='inner-project-container'>
      <div className="project-1-container" onMouseEnter={() => setFlip1(true)} onMouseLeave={() => setFlip1(false)}>
        <div className={`project-card ${flip1 ? "flip" : ""}`} >
        <div className="front pic pic-1">
        </div>
        <div className="back">HTML <br /> CSS <br /> JavaScript</div>
        </div>
        </div>
        <div className='project-desc'>
        <p style={{ fontSize: "0.85rem", opacity: 0.75}}>
        My first real world project, Gent&apos;s Classic Cuts is a brochure website for a 
        local barbershop. It showcases my skills in the core technologies of web development:
        JavaScript, CSS, and HTML. No frameworks or libraries, just plain code.
        </p>
        </div>
        </div>
        <div className='project-buttons'>
          <button className='project-button site' onClick={() => handleClick1()}>View Site</button>
          <button className='project-button code' onClick={() => handleClick1Code()}>View Code</button>
        </div>
        </div>
        <div className='project'>
          <div className='inner-project-container'>
        <div className="project-1-container" onMouseEnter={() => setFlip4(true)} onMouseLeave={() => setFlip4(false)}>
        <div className={`project-card ${flip4 ? "flip" : ""}`} >
        <div className="front pic pic-4">
        </div>
        <div className="back">WordPress</div>
        </div>
        </div>
        <div className='project-desc'>
        <p style={{ fontSize: "0.85rem", opacity: 0.75}}>
        Fetching Looks was my second real world project. To show my ability to learn new technologies,
        I built this site on WordPress, which I had not used in the past. The goal was to create a new, 
        user friendly site and theme while optimizing it for mobile devices. 
        </p>
        </div>
        </div>
        <div className='project-buttons'>
          <button className='project-button site' onClick={() => handleClick4()}>View Site</button>
        </div>
        </div>
        <div className='project'>
          <div className='inner-project-container'>
          <div className="project-1-container" onMouseEnter={() => setFlip2(true)} onMouseLeave={() => setFlip2(false)}>
        <div className={`project-card ${flip2 ? "flip" : ""}`} >
        <div className="front pic pic-2">
        </div>
        <div className="back">HTML <br /> CSS <br /> JavaScript <br /> APIs</div>
        </div>
        </div>
        <div className='project-desc'>
        <p style={{ fontSize: "0.85rem", opacity: 0.75}}>
        I built here a weather app that connects directly to OpenWeatherAPI to fetch
        current weatcher data and display it in a user friendly way. I also used
        Google&apos;s GeolocationAPI to get the user&apos;s current location.
        </p>
        </div>
        </div>
        <div className='project-buttons'>
        <button className='project-button site' onClick={() => handleClick2()}>View Site</button>
        <button className='project-button code' onClick={() => handleClick2Code()}>View Code</button>
        </div>
        </div>
        <div className='project'>
          <div className='inner-project-container'>
          <div className="project-1-container" onMouseEnter={() => setFlip3(true)} onMouseLeave={() => setFlip3(false)}>
        <div className={`project-card ${flip3 ? "flip" : ""}`} >
        <div className="front pic pic-3">
        </div>
        <div className="back">
          <div className='lang-clm'>
            HTML <br /> CSS <br /> JavaScript <br /> Next.js
          </div>
          <div>
            React <br /> Node.js <br /> Express <br /> MongoDB
          </div>
        </div>
        </div>
        </div>
        <div className='project-desc'>
        <p style={{ fontSize: "0.85rem", opacity: 0.75}}>
        This is a simple product list app that puts together all the languages I learned
        during my fellowship at Parsity, creating a my first full stack project. I created
        my own API and connected it to the front end of the application. I also created multiple
        filters and sorting options for the user to interact with.
        </p>
        </div>
        </div>
        <div className='project-buttons'>
        <button className='project-button site' onClick={() => handleClick3()}>View Code</button>
        </div>
        </div>
    </div>
  );
};

export default Projects;
