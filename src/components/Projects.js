import React from "react";
import { FaArrowDown } from "react-icons/fa";
import SignUp from "./SignUp";

const Projects = () => {
  return (
    <section className="projects-wrapper" id="projects-section">
      <h1>And...<br />These are my projects...</h1>
      <br />
      <h4 style={{color: "rgb(0, 162, 255)"}}>Sign up Form <FaArrowDown /></h4>
      <br />
      <SignUp />
    </section>
  );
};

export default Projects;
