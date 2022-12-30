import React, { Component } from "react";
import {
  FaLaptopCode,
  FaHtml5,
  FaCode,
  FaUikit,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  // FaPhp,
  FaBootstrap,
} from "react-icons/fa";
// import { DiMysql } from "react-icons/di";
import { SiExpress, SiMongodb, SiWebpack } from "react-icons/si";

class Skills extends Component {
  render() {
    return (
      <section className="skills-wrapper" id="skills-section">
        <div className="container" id="skills-main-info">
          <h1 className="display-1 text-center">What i Do...</h1>
          <div className="col text-center">
            <SiWebpack size={"1.5rem"} color="rgb(0, 162, 255)" /> Web
            development,{" "}
            <FaLaptopCode size={"1.5rem"} color="rgb(0, 162, 255)" />
            FrontEnd and BackEnd,{" "}
            <FaCode size={"1.5rem"} color="rgb(0, 162, 255)" />
            Programming and <FaUikit size={"1.5rem"} color="rgb(0, 162, 255)" />
            UI/UX Animations{" "}
          </div>

          <p className="lead text-center">Languages i speak...</p>
          <div className="row">
            <div className="card-box">
              <div className="col">
                <h2 className="mb-3">FrontEnd...</h2>
                <ul>
                  <li className="lang-title">
                    <FaHtml5 size={"2rem"} color="#f23" className="icons" />
                    <span className="code-brackets">&#60;</span>HTML5{" "}
                    <span className="code-brackets">&frasl;&#62;</span>{" "}
                  </li>
                  <li className="lang-title">
                    <FaCss3 size={"2rem"} color="blue" className="icons" />
                    <span className="code-brackets">&#123;</span> CSS
                    <span className="code-brackets">:</span>3
                    <span className="code-brackets">;</span>{" "}
                    <span className="code-brackets">&#125;</span>
                  </li>
                  <li className="lang-title">
                    <FaJs size={"2rem"} color="yellow" className="'icons" />
                    <span className="code-brackets">
                      &#123;
                    </span> Javascript{" "}
                    <span className="code-brackets">&#125;</span>
                  </li>

                  <li>
                    <FaBootstrap size={"2rem"} color="purple" /> Bootstrap
                  </li>
                  <li className="lang-title">
                    <FaReact
                      size={"2rem"}
                      color="#61dafb"
                      className="icons"
                      style={{ animation: "App-logo-spin 5s linear infinite" }}
                    />
                    <span className="code-brackets">&#123;</span> React{" "}
                    <span className="code-brackets">&#125;</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-box">
              <div className="col">
                <h2>BackEnd...</h2>
                <ul>
                  <li>
                    <FaNodeJs size={"2rem"} color="green" className="icons" />{" "}
                    Node
                  </li>
                  <li>
                    <SiExpress size={"1.5rem"} className="icons" />
                    press
                  </li>
                  <li>
                    <SiMongodb
                      size={"1.5rem"}
                      color="green"
                      className="icons"
                    />{" "}
                    Mongo DB
                  </li>
                  {/* <li>
                    <FaPhp size={"1.5rem"} color="#3355aa" className="icons" />
                    <span className="code-brackets">&#60;?</span>PHP{" "}
                    <span className="code-brackets">&#62;</span>
                  </li>
                  <li>
                    <DiMysql size={"1.5rem"} color="orange" className="icons" />
                    <span className="code-brackets">&#40; </span>My SQL{" "}
                    <span className="code-brackets">&#41;</span>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
