import React from 'react';
import "../App.css"
function Loader() {
  return (
    <>
    {/*  i added  this loader in the starting of the  website */}
    <center className='load' >
      <img src="https://media.tenor.com/wpSo-8CrXqUAAAAj/loading-loading-forever.gif" style={{width:"15%",height:"15%"}} alt="Loading..." />
    </center>
    </>
  );
}

export default Loader;
