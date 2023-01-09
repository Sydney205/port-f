import React from "react";
import Navbar from "./home/Navbar";
import Home from "./home/Home";
import About from "./home/About";
import Skills from "./home/Skills";
import Contact from "./home/Contact";
import NewProjects from "./home/NewProjects";

function HomePage() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <NewProjects />
      <Contact />
    </main>
  );
}

export default HomePage;
