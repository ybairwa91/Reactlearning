import { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/TextForm";

let name = <b>harry</b>;

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar
        title="Textutils"
        node={mode}
        toggleMode={toggleMode}
        aboutText="About TextUtils"
      />
      <div className="container my-3">
        <Textform heading="Enter the text to analyse below" mode={mode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
