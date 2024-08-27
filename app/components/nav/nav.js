"use client";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./nav.css";

const Nav = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled past a certain point (e.g., 100px)
      const scrolled = window.scrollY > 100;
      setIsScrolling(scrolled);
    };

    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    <div className={isScrolling ? "nav floating" : "nav"}>
      <div className="pages">
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="menu-item"
          offset={-80}
        >
          about
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="menu-item"
          offset={-79}
        >
          projects
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          className="menu-item"
          offset={-81}
        >
          skills
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="menu-item last"
          offset={-80}
        >
          contact
        </ScrollLink>
      </div>
    </div>
    <div className={`scroll-for-more ${isScrolling ? 'scrolled' : ''}`}>
        scroll for more
      </div>
    </>
  );
};

export default Nav;
