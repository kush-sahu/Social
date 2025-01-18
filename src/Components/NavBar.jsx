import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";
function NavBar({value}) {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px", backgroundColor: "rgb(5 20 38)" }}>
      <h1 style={{ color: "white" }}>
        Document Analyzer
      </h1>

      { value && (<button className='Uploadbtn'  onClick={() => navigate("/")}>
        Upload New File
      </button> )}
    </div>
  );
}

export default NavBar;
