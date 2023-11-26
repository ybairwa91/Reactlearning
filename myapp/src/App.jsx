import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleOne = function () {
    if (mode === "light") {
      setMode("primary");
      document.body.style.backgroundColor = "blue";
      showAlert("Avatar Mode has been enabled", "primary");
      document.title = "TextUtils-Primary";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "Light");
      document.title = "TextUtils-light";
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled", "secondary");
      document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "danger");
      document.title = "TextUtils-Light Mode";
    }
  };

  return (
    <>
      <Navbar
        title="Textutils"
        node={mode}
        toggleMode={toggleMode}
        aboutText="About TextUtils"
        toggleOne={toggleOne}
      />

      <Alert alert={alert} />

      <Textform
        showAlert={showAlert}
        heading="Enter the code to analyse"
        mode={mode}
      />

      {/* <About /> */}
    </>
  );
}

export default App;
