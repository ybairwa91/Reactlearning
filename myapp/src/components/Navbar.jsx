import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-primary"
      data-bs-theme={props.node}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
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
              <a
                className={`nav-link active text-${
                  props.mode === "light?dark:light"
                }`}
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-${
                  props.node === "dark" ? "light" : "dark"
                }`}
                href="/"
              >
                {props.aboutText}
              </a>
            </li>
          </ul>
        </div>
      </div>
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
