import React, { useState } from "react";
import Tesseract from "tesseract.js";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

// Set worker source for PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("eng");
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };

  const processFile = async () => {
    if (!file) {
      alert("Please upload a file.");
      return;
    }

    setLoading(true);
    const fileType = file.type || file.name.split(".").pop();

    try {
      let extractedText = "";
      if (fileType === "application/pdf" || fileType.toLowerCase() === "pdf") {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

        let structuredText = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();

          const pageLines = {};
          textContent.items.forEach((item) => {
            const y = item.transform[5];
            const text = item.str;

            if (!pageLines[y]) {
              pageLines[y] = [];
            }
            pageLines[y].push({ text, x: item.transform[4] });
          });

          const sortedLines = Object.keys(pageLines)
            .sort((a, b) => parseFloat(b) - parseFloat(a))
            .map((y) => {
              return pageLines[y].sort((a, b) => a.x - b.x).map((item) => item.text).join(" ");
            });

          const pageText = sortedLines.join("\n");
          structuredText += `Page ${i}:\n${pageText}\n\n`;
        }
        extractedText = structuredText;
      } else if (fileType.startsWith("image/")) {
        const { data } = await Tesseract.recognize(file, language);
        extractedText = data.text;
      } else {
        alert("Unsupported file type. Please upload a PDF or an image.");
        return;
      }

      // Navigate to the Extract page and pass the extracted text
      navigate("/extract", { state: { extractedText } });
    } catch (error) {
      console.error("Error processing file:", error);
      alert("An error occurred while processing the file. Please check the file and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div
        className="box1 border p-4 text-center"
        style={{
          border: "2px dashed gray",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
          height: "70vh",
          width: "70%",
          margin: "auto",
        }}
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleFileDrop}
      >
        <h3
          style={{
            fontSize: "34px",
            margin: "35px",
          }}
        >
          Drop file here
        </h3>
        <input
          type="file"
          accept=".pdf,image/*"
          onChange={handleFileChange}
          style={{
            background: "rgb(35 50 78)",
            width: "30%",
            height: "50%",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            outline: "none",
            border: "2px solid white",
            padding: "5%",
            margin: "auto",
            
          }}
        />
        <div className="mt-3">
          <label htmlFor="language" className="me-2">
            Select Language:
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="form-select w-auto d-inline"
          >
            <option value="eng">English</option>
            <option value="spa">Spanish</option>
            <option value="fra">French</option>
            <option value="deu">German</option>
            <option value="ita">Italian</option>
          </select>
        </div>
        <button
          onClick={processFile}
          disabled={loading}
          
          style={{
            border: "2px solid white",
            backgroundColor: "rgb(6, 42, 83)",
            borderRadius: "10px",
            color: "white",
            padding: "10px",
          }}
        >
          {loading ? "Processing..." : "Extract Text"}
        </button>
        {file && <p className="mt-3 " style={{margin:'10%'}}>File Selected: {file.name}</p>}
      </div>
    </div>
  );
};

export default FileUploader;
