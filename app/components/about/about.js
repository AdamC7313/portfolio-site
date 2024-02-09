import React from "react";
import "./about.css";
import Image from "next/image";
import headshot from "./headshot.png";

const about = () => {
  return (
    <div className="about-container" id="about">
      <h2 className="about-title">about me</h2>
      <div className="about-words-container">
        <p>
          Science and music have always been my passion. Both bring a sense of
          challenge and need for practice. I&apos;ve always been pushed to be
          the best I can be. So naturally, I went to college (Florida Southern)
          to get a degree in biology and pursue medical school. <br />
          <br />I quickly found out that this path was not mine. After my
          bachelor&apos;s, I went to the University of South Florida for a
          master&apos;s in medical science. Realizing the exponential growth of
          the clinical research industry, I got a job as a coordinator at a
          local site. <br />
          <br />
          Spending a year as a coordinator taught me about clinical research and
          prepared me for my next job as a vendor specialist for a large network
          of sites. I found one thing to be my favorite part about both of these
          jobs: I created an excel app that helped me do my job better. I
          decided to begin teaching myself how to code using any resources I
          could find, creating projects and websites on my own. <br />
          <br />
        </p>
        <div className="last-line">
          <p className="about-last">
            Since then, I have graduated from an intense 6 month bootcamp
            learning all the skills needed to become a software engineer. Now my
            goal is to help others by building them tools to help them do their
            jobs easier. My background is mainly scientific, specifically in lab
            and clinical research work, however, I am a quick learner and easy
            to work with. I will work to bring your ideas to life exactly how
            you envision them.
          </p>
          <div className="image-container">
            <Image
              className="headshot"
              src={headshot}
              width={150}
              height={150}
              alt="headshot"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
