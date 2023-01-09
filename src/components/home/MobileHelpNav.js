import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MobileHelpNav = () => {
  const [position, setPosition] = useState("fixed");

  const changePosition = () => {
    if (window.scrollY >= 1) {
      setPosition("absolute");
    } else {
      setPosition("fixed");
    }
  };
  useEffect(() => {
    changePosition();
    window.addEventListener("scroll", changePosition);
  });

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3"
      id="mobile_nav"
      style={{ position: `${position}` }}
    >
      <div className="m_site-name">
        <div className="site-name">
          <h1 className="top-site-first-name display-7">
            Sydney's <span className="top-site-last-name">Website</span>
          </h1>
        </div>
      </div>
      <div className="mobile_nav-item">
        <Link className="mobile_nav_btn" to="/Login">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default MobileHelpNav;
