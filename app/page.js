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
      <Analytics />
      <Nav />
      <Head />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
