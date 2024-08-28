"use client";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./nav.css";

const Nav = () => {
  const [isScrolling, setIsScrolling] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      if (scrollPosition < 300) {
        setIsScrolling("about");
      } else if (scrollPosition >= 300 && scrollPosition < 1200) {
        setIsScrolling("experience");
      } else if (scrollPosition >= 1200 && scrollPosition < 2540) {
        setIsScrolling("projects");
      } else if (scrollPosition >= 2540) {
        setIsScrolling("skills");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="nav">
        <div className="pages">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className={isScrolling === "about" ? "active-menu-item" : "menu-item"}
          >
            about
          </ScrollLink>
          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            className={isScrolling === "experience" ? "active-menu-item" : "menu-item last"}
          >
            experience
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className={isScrolling === "projects" ? "active-menu-item" : "menu-item"}
          >
            projects
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            className={isScrolling === "skills" ? "active-menu-item" : "menu-item"}
          >
            skills
          </ScrollLink>
        </div>
      </div>
      <div className={`scroll-for-more ${isScrolling ? "scrolled" : ""}`}>
        scroll for more
      </div>
    </>
  );
};

export default Nav;