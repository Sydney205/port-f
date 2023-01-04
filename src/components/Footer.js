import React from "react";
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section>
      <div className="footer-button-container">
        <div className="button">
          <a
            href="https://web.facebook.com/people/Dieke-Sydney/100081882726090/"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <div className="icons">
              <FaFacebook className="icon" />
            </div>
            Dieke Sydney
          </a>
        </div>
        <div className="button">
          <a
            href="https://twitter.com/DiekeSydney"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <div className="icons">
              <FaTwitter className="icon" />
            </div>
            &#64;DiekeSydney
          </a>
        </div>
        <div className="button">
          <a
            href="https://github.com/Sydney205"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <div className="icons">
              <FaGithub className="icon" />
            </div>
            Sydney205
          </a>
        </div>
        <div className="button">
          <a
            href="https://www.linkedin.com/search/results/all/?keywords=dieke%20sydney&origin=RICH_QUERY_SUGGESTION&position=0&searchId=8ced8cb9-e121-4a6d-b3d5-a9aa17917b4e&sid=Dk*"
            target={"_blank"}
            rel={"noreferrer"}
          >
            {" "}
            <div className="icons">
              <FaLinkedinIn className="icon" />
            </div>
            Dieke Sydney
          </a>
        </div>
      </div>
      <br />
      <br />
      <p
        className="display-7"
        style={{
          color: "white",
          opacity: "0.5",
          textAlign: "center",
        }}
      >
        &copy; All Rights reserved 2023.
      </p>
    </section>
  );
};

export default Footer;
