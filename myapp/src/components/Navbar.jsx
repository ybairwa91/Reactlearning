import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.node} bg-body-primary`}>
      <div className="container-fluid">
        <Link
          className={`navbar-brand text-${
            props.node === "light" ? "dark" : "light"
          }`}
          to="/"
        >
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link active text-${
                  props.node === "light" ? "dark" : "light"
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.node === "dark" ? "light" : "dark"
                }`}
                to="/about"
              >
                {props.aboutText}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* first button */}
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.toggleOne}
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          Enable {props.node === "light" ? "primary" : "light"} Mode
        </label>
      </div>

      {/* second switch */}
      <div className=" px-5 form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.toggleMode}
        />
        <label
          className={`px-2  form-check-label text-${
            props.node === "light" ? "dark" : "light"
          }`}
          htmlFor="flexSwitchCheckDefault"
        >
          Enable {props.node === "light" ? "Dark" : "light"}Mode
        </label>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "set title here",
  aboutText: "set about section",
};
