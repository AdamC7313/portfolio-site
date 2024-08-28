import Head from "./components/head/head";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import { Analytics } from "@vercel/analytics/react";
import Experience from "./components/experience/Experience";

export default function Home() {
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
