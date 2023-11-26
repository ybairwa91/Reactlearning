import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

//same  as this
// const counter = document.getElementbyId("root");
// const root = ReactDOM.createroot(counter);

// root.render(<App />);
