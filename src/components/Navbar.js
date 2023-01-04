import React, { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaBars, FaSkating } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineHome, MdPerson } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const [wid, setWid] = useState("-100%");
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  const openSidebar = () => {
    setWid("0");
  };
  const closeSidebar = () => {
    setWid("-100%");
  };

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3 justify-content-center"
      style={{ backgroundColor: `${navbar}` }}
      id={navbar ? "trans_nav" : "nav"}
    >
      <div className="menu-bars">
        <div>
          <Link to="#">
            <FaBars onClick={openSidebar} />
          </Link>
        </div>
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
            <MdOutlineHome className="top-nav-icons" />
            <br />
            <span className="title">Home</span>
          </NavHashLink>
        </li>
        <li className="nav-item">
          <NavHashLink to="#about-section" className="nav-link">
            <MdPerson className="top-nav-icons" />
            <br />
            <span className="title">About Me!</span>
          </NavHashLink>
        </li>
        <li className="nav-item">
          <NavHashLink to="#skills-section" className="nav-link">
            <FaSkating className="top-nav-icons" />
            <br />
            <span className="title">Skills</span>
          </NavHashLink>
        </li>
        <li className="nav-item">
          <NavHashLink to="#contact-section" className="nav-link">
            <MdOutlineEmail className="top-nav-icons" />
            <br />
            <span className="title">Contact</span>
          </NavHashLink>
        </li>
      </ul>

      <button className="nav_btn" onClick={() => navigate("/Login")}>
        Login
      </button>
    </nav>
  );
};

export default Navbar;
