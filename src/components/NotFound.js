import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const TITLE = "page not found";

class NotFound extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <section className="not_found-wrapper" id="not_found-section">
          <h1>!Oops</h1>
          <img src={process.env.PUBLIC_URL + "/404.png"} alt="404 image" />
          <Link to={-1}>
            <FaArrowLeft /> Back
          </Link>
        </section>
      </>
    );
  }
}

export default NotFound;
