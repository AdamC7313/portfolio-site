import Head from "./components/head/head";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Head />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
