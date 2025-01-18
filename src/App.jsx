import React, { useState, useEffect } from "react";
import FileUploader from "./Components/FileUploader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Extrectcode from "./Components/Extrectcode";
import Loader from "./Components/Loader";
import "./App.css";
const App = () => {
  const [loading, setLoading] = useState(true);
 {/* this  Loader will load 1.5 sec */}
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Cleanup timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="main">
      {/*  Router will navigate to the different pages */}
      <Router>
        <Routes>
          <Route path="/" element={<FileUploader />} />
          <Route path="/extract" element={<Extrectcode />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
