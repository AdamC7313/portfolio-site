'use client';
import React, { useState } from "react";
import "./projects.css";

const Projects = () => {

  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);

  function handleClick1() {
    var win = window.open('https://adamc7313.github.io/gents-brochure/', '_blank');
    win.focus();
  }

  function handleClick1Code() {
    var win = window.open('https://github.com/AdamC7313/gents-brochure', '_blank');
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


  return (
    <div className="projects-container" id="projects">
      <h2 className='projects-title' style={{margin: "20px"}}>projects</h2>
      <p className='project-byline'>Hover over/tap picture for languages and technologies used.</p>
      <div className='project'>
      <div className="project-1-container" onMouseEnter={() => setFlip1(true)} onMouseLeave={() => setFlip1(false)}>
        <div className={`project-card ${flip1 ? "flip" : ""}`} >
        <div className="front pic pic-1">
        </div>
        <div className="back">HTML <br /> CSS <br /> JavaScript</div>
        </div>
        </div>
        <div className='project-desc'>
          <p>
        Gent&apos;s Classic Cuts Brochure Website is a showcase of my proficiency in web development using the core technologies of web development: JavaScript, CSS, and HTML. The website serves as an online brochure for a local barber shop, Gent&apos;s Classic Cuts, providing essential information about the services offered, the team, and contact details. The project is optimized for seamless viewing on tablets and phones. 
        </p>
        <div className='project-buttons'>
          <button className='project-button site' onClick={() => handleClick1()}>View Site</button>
          <button className='project-button code' onClick={() => handleClick1Code()}>View Code</button>
        </div>
        </div>
        </div>
        <div className='project'>
      <div className="project-1-container" onMouseEnter={() => setFlip2(true)} onMouseLeave={() => setFlip2(false)}>
        <div className={`project-card ${flip2 ? "flip" : ""}`} >
        <div className="front pic pic-2">
        </div>
        <div className="back">HTML <br /> CSS <br /> JavaScript <br /> APIs</div>
        </div>
        </div>
        <div className='project-desc'>
          <p>
          Of course, it&apos;s a weather app. With this project, I used an OpenWeatherAPI to fetch current weather data for a user inputted location. It will get the user&apos;s current location using Googlez&apos;s GeolocationAPI or use an inputted location and get the 5 day forecast.  I was also able to show some of my design abilities with this project.
        </p>
        <div className='project-buttons'>
        <button className='project-button site' onClick={() => handleClick2()}>View Site</button>
        <button className='project-button code' onClick={() => handleClick2Code()}>View Code</button>
        </div>
        </div>
        </div>
        <div className='project'>
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
          <p>
          This project is a simple product list app, which fetches data from a backend server I created and shows products on the frontend. It allows for filtering, sorting and searching; showcasing my proficiency in full stack development. For this project, I created my own API, and used it to fetch data for the frontend. I tested for edge cases and handled errors while also creating a user-friendly interface. Each filter and sort option is dynamic and updates the product list in real time, and are able to be used together.
        </p>
        <div className='project-buttons'>
        <button className='project-button site' onClick={() => handleClick3()}>View Code</button>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Projects;
