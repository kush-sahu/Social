import React, { useState, useEffect } from "react";
import FileUploader from "./Components/FileUploader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Extrectcode from "./Components/Extrectcode";
import NavBar from "./Components/NavBar";
import Loader from "./Components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Cleanup timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ height: "100vh", width: "100%", backgroundImage: "url('https://wallpaperaccess.com/full/9448012.png')", backgroundSize: "cover", backgroundPosition: "center", fontFamily: "'Tektur', sans-serif" }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<FileUploader />} />
          <Route path="/extract" element={<Extrectcode />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
