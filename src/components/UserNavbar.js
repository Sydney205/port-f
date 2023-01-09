import React, { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaBars, FaSkating } from "react-icons/fa";
import { MdEmail, MdHome, MdPerson } from "react-icons/md";
import MobileHelpNav from "./MobileHelpNav";

const Navbar = () => {
  const navigate = useNavigate();
  const [wid, setWid] = useState("-100%");
  const [navbar, setNavbar] = useState("");
  const [position, setPosition] = useState(false)

  const changePosition = () => {
    if (window.scrollY >= 88) {
      setPosition(true)
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

  return (
    <>
      <MobileHelpNav />
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3 justify-content-center"
        id={ position ? "trans_nav" : "nav" }
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
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <NavHashLink to="#home-section" className="nav-link active">
              <MdHome className="top-nav-icons" />
            </NavHashLink>
            <span className="title">Home</span>
          </li>
          <li className="nav-item">
            <NavHashLink to="#about-section" className="nav-link">
              <MdPerson className="top-nav-icons" />
            </NavHashLink>
            <span className="title">About ME!</span>
          </li>
          <li className="nav-item">
            <NavHashLink to="#skills-section" className="nav-link">
              <FaSkating className="top-nav-icons" />
            </NavHashLink>
            <span className="title">Skills</span>
          </li>
          <li className="nav-item">
            <NavHashLink to="#contact-section" className="nav-link">
              <MdEmail className="top-nav-icons" />
            </NavHashLink>
            <span className="title">Contact</span>
          </li>
        </ul>
        <div className="nav_btn">
          <button onClick={() => navigate("/Login")}>Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
