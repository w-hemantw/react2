import { useState } from "react";
import "./styles.css";

export default function App() {
  const [colour, setcolour] = useState("red");
  const [AWD, setAWD] = useState("visible");
  const [NAME, setNAME] = useState("visible");
  const [ROLL, setROLL] = useState("visible");
  const awd = () => {
    setcolour("blue");
    setAWD("hidden");
  };
  const Name = () => {
    setcolour("blue");
    setNAME("hidden");
  };
  const roll = () => {
    setcolour("yellow");
    setROLL("hidden");
  };
  return (
    <div className="App">
      <span
        onClick={Name}
        style={{ fontSize: "40px", color: colour, visibility: NAME }}
      >
        Hemant{" "}
      </span>
      <span
        onClick={roll}
        style={{ fontSize: "40px", color: colour, visibility: ROLL }}
      >
        0607{" "}
      </span>
      <span
        onClick={awd}
        style={{ fontSize: "40px", color: colour, visibility: AWD }}
      >
        AWD
      </span>
    </div>
  );
}
