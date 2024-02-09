import React from "react";
import Link from "next/link";
import "./contact.css";
import Image from "next/image";
import github from "./github.png";
import linkedin from "./linkedin.png";
import email from "./email.png";

const Contact = () => {
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
            width={60}
            height={60}
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
            width={60}
            height={60}
          />
        </a>
        <a href="mailto:AdamCruzDev@gmail.com">
          <Image
            className="social-btn"
            alt="email"
            src={email}
            width={79}
            height={60}
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
