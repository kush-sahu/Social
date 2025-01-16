// import React from 'react'

// function Extrectcode({extractedText}) {
//   return (
//     <div>
//         {extractedText && (
//         <div className="mt-4">
//           <h4>Extracted Text:</h4>
//           <pre
//             style={{
//               whiteSpace: "pre-wrap", // Preserve layout
//               backgroundColor: "#eef2f3",
//               padding: "15px",
//               borderRadius: "5px",
//             }}
//           >
//             {extractedText}
//           </pre>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Extrectcode

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
        {extractedText}
      </pre>
    </div>
  );
};

export default Extractcode;
