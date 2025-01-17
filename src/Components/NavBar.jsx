import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px", backgroundColor: "rgb(5 20 38)" }}>
      <h1 style={{ color: "white" }}>
        Document Analyzer
      </h1>
      <button className='' style={{
        border: "2px solid white",
        backgroundColor: "transparent",
        borderRadius: "10px",
        color: "white",
        padding: "10px",
      }} onClick={() => navigate("/")}>
        Upload File
      </button>
    </div>
  );
}

export default NavBar;
