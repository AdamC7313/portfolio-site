"use client"
import React, { useEffect, useState } from "react";
import Head from "./components/head/head";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import { Analytics } from "@vercel/analytics/react";
import Experience from "./components/experience/Experience";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1370);
    };

    // Check screen size on mount
    checkScreenSize();

    // Add event listener to handle window resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  if (isSmallScreen) {
    return (
      <main>
        <div style={{ padding: "20px 50px"}}>
        <Analytics />
          <Head />
          <Contact />
          <About />
          <Experience />
          <Projects />
          <Skills />
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <div className="app-container">
          <Analytics />
          <div className="main-sticky-container">
            <div className="head-and-nav">
              <Head />
              <Nav />
            </div>
            <Contact />
          </div>
          <div className="main-info-container">
            <About />
            <Experience />
            <Projects />
            <Skills />
          </div>
        </div>
      </main>
    );
  }
}