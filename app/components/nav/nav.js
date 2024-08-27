"use client";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./nav.css";

const Nav = () => {
  const [isScrolling, setIsScrolling] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      if (scrollPosition < 900) {
        setIsScrolling("about");
      } else if (scrollPosition >= 900 && scrollPosition < 3800) {
        setIsScrolling("projects");
      } else if (scrollPosition >= 3800 && scrollPosition < 4570) {
        setIsScrolling("skills");
      } else if (scrollPosition >= 4570) {
        setIsScrolling("contact");
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
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className={isScrolling === "contact" ? "active-menu-item" : "menu-item last"}
          >
            contact
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