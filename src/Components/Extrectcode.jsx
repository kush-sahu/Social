import React from "react";
import { useLocation } from "react-router-dom";

const Extractcode = () => {
  const location = useLocation();
  const extractedText = location.state?.extractedText || "No text extracted.";

  return (
    <div className="container mt-5" style={{overflowY:"scroll",height:"70vh"}}>
      <h3 style={{color:"white"}}>Extracted Text</h3>
      <pre
        style={{
          backgroundColor: "#f9f9f9",
          padding: "15px",
          borderRadius: "5px",
          whiteSpace: "pre-wrap",
        }}
      >
        <h4>{extractedText}</h4>
      </pre>
    </div>
  );
};

export default Extractcode;
