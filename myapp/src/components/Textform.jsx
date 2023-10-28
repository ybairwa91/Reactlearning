import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState(" ");

  const handleUpClick = function () {
    setText(text.toUpperCase());
  };
  const handleLoClick = function () {
    setText(text.toLowerCase());
  };
  const handleSpaceClick = function () {
    setText(text.trim());
  };

  const handleOnChange = function (event) {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1 className={`text-${props.mode === "light" ? "black" : "white"}`}>
          {props.heading}
        </h1>

        <div>
          <textarea
            className={`form-control text-${
              props.mode === "light" ? "white" : "black"
            }`}
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button
          onClick={handleUpClick}
          className={`btn mx-2 btn-outline-${
            props.mode === "light" ? "dark" : "light"
          } my-2`}
        >
          Convert to UPPERCASE
        </button>
        <button
          onClick={handleLoClick}
          className={`btn mx-2 btn-outline-${
            props.mode === "light" ? "dark" : "light"
          } my-2`}
        >
          Convert to lowercase
        </button>
        <button
          onClick={handleSpaceClick}
          className={`btn mx-2 btn-outline-${
            props.mode === "light" ? "dark" : "light"
          } my-2`}
        >
          Clear unwanted space
        </button>
      </div>

      <div
        className={`container my-4  text-${
          props.mode === "light" ? "black" : "white"
        }`}
      >
        <h2 className={`text-${props.mode === "light" ? "black" : "white"}`}>
          Your Text Summary
        </h2>
        <p>
          {text.split(" ").length} words,{text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minute read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something To preview Here"}</p>
      </div>
    </>
  );
}
