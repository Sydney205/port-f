import React from "react";
import { HashLink } from "react-router-hash-link";
import Typed from "react-typed";

function About() {
  return (
    <section className="about-wrapper" id="about-section">
      <div className="container text-center" id="about-main-info">
        <div className="about-headers">
          <h1 className="display-1">About ME!</h1>
          <Typed
            className="lead display-7"
            style={{ fontFamily: "Rubik", color: "rgb(0, 162, 255)" }}
            strings={[
              `Tap the card to view more


          ...
          `,
            ]}
            typeSpeed={60}
            backSpeed={30}
            loop
          />
        </div>
        <div id="about-main-info">
          <div className="cardI">
            <div className="imgBx">
              <img
                src={process.env.PUBLIC_URL + "/ProPic.PNG"}
                alt="Profile-pic"
              />
            </div>
            <div className="about-content">
              <div className="details">
                <h2>
                  Dieke Sydney
                  <span className="bio">
                    <br />
                    &#123; Software Engineer &#125;
                  </span>
                </h2>

                <div className="data">
                  <p className="lead">
                    <span
                      style={{ fontWeight: "bold", color: "rgb(0, 162, 255)" }}
                    >
                      Hi! i'm Sydney
                    </span>
                    <br />
                    A FullStack developer and UI/UX javascript specialist and
                    React.
                    <br />
                    I enjoy building everything from websites to rich
                    interactive apps.
                    <br />
                    So if you are a person or a buisness seeking web presence...
                  </p>
                </div>
                <div className="about-btn">
                  <button>
                    <HashLink
                      to="#contact-section"
                      style={{ textDecoration: "none", color: "white" }}
                      className="a"
                    >
                      {" "}
                      Hire Me
                    </HashLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
