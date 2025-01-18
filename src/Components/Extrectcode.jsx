import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import "../App.css";
const Extractcode = () => {
  const location = useLocation();
  const extractedText = location.state?.extractedText || "No text extracted.";

  return (
    <>
    {/* I made this component for to display Extracted Code */}
    <NavBar value={true} />
    <div className="container mt-5" style={{overflowY:"scroll",height:"70vh"}}>
      <h3 style={{color:"white"}}>Extracted Text</h3>
      <pre className="extract-pre">
        <h4>{extractedText}</h4>
      </pre>
    </div>
    </>
  );
};

export default Extractcode;
