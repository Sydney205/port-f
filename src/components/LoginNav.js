import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";
// import MobileHelpNav from "./MobileHelpNav";

const LoginNav = () => {
  const navigate = useNavigate();
  const [wid, setWid] = useState("-100%");
  const [position, setPosition] = useState(false);

  const changePosition = () => {
    if (window.scrollY >= 88) {
      setPosition(true);
    } else {
      setPosition(false);
    }
  };

  useEffect(() => {
    changePosition();
    window.addEventListener("scroll", changePosition);
  });

  const openSidebar = () => {
    setWid("0");
  };
  const closeSidebar = () => {
    setWid("-100%");
  };

  const content = (
    <>
      {/* <MobileHelpNav /> */}
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3 justify-content-center"
        id={position ? "trans_nav" : "nav"}
      >
        <div className="menu-bars">
          <Link to="#">
            <FaBars onClick={openSidebar} />
          </Link>
        </div>
        <Sidebar left={wid} closeSidebar={closeSidebar} />

        <div className="site-name">
          <h1 className="top-site-first-name display-7">
            Sydney's <span className="top-site-last-name">Website</span>
          </h1>
        </div>

        <div className="nav_btn">
          <button onClick={() => navigate("/Signup")}>Signup</button>
        </div>
      </nav>
    </>
  );

  return content;
};

export default LoginNav;
