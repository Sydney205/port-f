import React from "react";
import { Link } from "react-router-dom";

const MobileHelpNav = () => {
  return (
    <nav className="mobile_nav">
      <ul className="mobile-nav">
        <li className="mobile_nav-item">
          <div className="site-name">
            <h1 className="top-site-first-name display-7">
              Sydney's <span className="top-site-last-name">Website</span>
            </h1>
          </div>
        </li>
        <li className="mobile_nav-item">
          <Link className="mobile_nav_btn" to="/Login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileHelpNav;
