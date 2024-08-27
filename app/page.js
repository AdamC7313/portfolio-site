import Head from "./components/head/head";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <main>
      <div className="app-container">
        <Analytics />
        <div className="main-sticky-container">
          <Head />
          <Nav />
        </div>
        <div className="main-info-container">
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </main>
  );
}
