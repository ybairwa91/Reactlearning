import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter Your Text Here");

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
        <h1>{props.heading}</h1>

        <div>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button onClick={handleUpClick} className="btn mx-2 btn-primary my-2">
          Convert to UPPERCASE
        </button>
        <button onClick={handleLoClick} className="btn mx-2 btn-primary my-2">
          Convert to lowercase
        </button>
        <button
          onClick={handleSpaceClick}
          className="btn mx-2 btn-primary my-2"
        >
          Clear unwanted space
        </button>
      </div>

      <div className="container my-4">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words,{text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minute read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
