import React from 'react'
import { useNavigate } from 'react-router-dom'
function NavBar() {
    const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center",display:"flex",justifyContent:"space-between" , padding: "20px", backgroundColor: "rgb(6 42 83)" }}>
        
        <center><h1 style={{ textAlign: "center", marginTop: "20px",color:"white" }}>
                Social Media Content Analyzer
              </h1></center>
        <button className='btn btn-danger mt-3' onClick={()=>navigate("/")}>Upload File</button>
    </div>
  )
}

export default NavBar