import React from 'react';
import optSetUp from '../assets/optSetUp.png';
import optReport from '../assets/documents/OPT_Report.pdf';
import pdfIcon from "../assets/pdf.png";
import '../Projects.css';

function OpticalPumpingProject() {
  return (
    <><h2>Optical Pumping</h2>
    <div className="entireProject">
      <div className='projectLeft'>
        <div className="projectSummary">
          <p>Optical pumping is an important technique that allows for the manipulation of atomic 
            and molecular energy levels using light. In this report, we present the results of an 
            optical pumping experiment performed on rubidium atoms. Our goal was to study 
            the hyperfine structure of rubidium atoms and to measure the Zeeman splitting of the 
            energy levels.</p>
        </div>
        <div className='InShort'>
          <ul>
            <p>In short:</p>
            <li>Identify Zeeman resonant frequency for Rubidium85 and Rubidium87 by varying an external radio frequency field</li>
            <li>Find the more precise Zeeman resonant frequency by modulating Helmholtz current and setting rf field at single frequency </li>
            <li>Measure the Zeeman resonance frequency with only ambient magnetic field</li>
            <li>Determine pumping time and relaxation time for Rubidium in Zeeman transition</li>
          </ul>
        </div>
        <div className='report'>
          <p>Click to view a detailed report of the project &rarr; </p>

          <button>
            <a href={optReport}> <img src={pdfIcon} alt="PDF" /> </a>
          </button>
        </div>
      </div>
      <div className='projectRight'>
        <img src={optSetUp} alt="OPT setup" /> 
      </div>
    </div></>
  );
}


<div className="hero-container">
  <video autoPlay muted loop>
    <source src="https://drive.google.com/file/d/1uPvvKDy1eoqkeVpyEgmqvapaMfY2i6Fs/preview" type="video/mp4" />
  </video>
  <div className="hero-text">
    <h1>Project Name</h1>
    <p>Description of the project</p>
  </div>
</div>


export default OpticalPumpingProject;