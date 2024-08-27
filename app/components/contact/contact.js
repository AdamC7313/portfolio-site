'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./contact.css";
import Image from "next/image";
import github from "./github.png";
import linkedin from "./linkedin.png";
import email from "./email.png";

const Contact = () => {

  let [measures, setMeasures] = useState(60);

  useEffect(() => {
    let mobile = window.matchMedia("(max-width: 780px)");

    if (mobile.matches) {
      setMeasures(40);
    } else {
      setMeasures(60);
    }
  }, []);
  

    
  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-me">contact</h2>
      <div className="socials-container">
        <a
          target="_blank"
          href="https://github.com/AdamC7313"
          rel="noopener noreferrer"
        >
          <Image
            className="social-btn"
            alt="github"
            src={github}
            width={measures}
            height={measures}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/adamdcruz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="social-btn"
            alt="linkedin"
            src={linkedin}
            width={measures}
            height={measures}
          />
        </a>
        <a href="mailto:AdamCruzDev@gmail.com">
          <Image
            className="social-btn"
            alt="email"
            src={email}
            width={measures*1.317}
            height={measures}
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
