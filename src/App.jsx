import React from "react";
import FileUploader from "./Components/FileUploader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Extrectcode from "./Components/Extrectcode";
import NavBar from "./Components/NavBar";
const App = () => {
  return (
    <div style={{ height: "100vh", width: "100%", backgroundImage: "url('https://jina-ai-gmbh.ghost.io/content/images/2023/03/image--6-.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      
  
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<FileUploader />} />
          <Route path="/extract" element={<Extrectcode />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
