import React from "react";
import { FaArrowDown } from "react-icons/fa";

const NewProjects = () => {
  return (
    <section className="full-projects-wrapper" id="full-projects-section">
      <h1>
        And
        <br />
        These are my projects...
      </h1>
      <br />
      <h4 style={{ color: "rgb(0, 162, 255)" }}>
        Sign up Form <FaArrowDown />
      </h4>
      <br />
      <div className="projects-container">
        <div className="project-box">
          <p className="project-title">Sign up Form</p>
        </div>
        <div className="project-box">
          <a
            href="https://wallmanagement.com"
            target={"_blank"}
            rel="noreferrer"
            className="project-title"
          >
            Wall Management
          </a>
        </div>
        <div className="project-box">
          <a
            href="https://wallmanagement.com"
            target={"_blank"}
            rel="noreferrer"
            className="project-title"
          >
            Calculator App
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewProjects;
