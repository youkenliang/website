import React from 'react';
import optSetUp from '../assets/optSetUp.png';
import evcsReport from '../assets/documents/CE88_Report.pdf';
import evcsPresentation from '../assets/documents/CE88_Presentation.pdf'
import pdfIcon from "../assets/pdf.png";
import slideIcon from "../assets/googleSlides.png";
import githubIcon from "../assets/github.png";
import '../Projects.css';

function ElectricVehicleChargingStationsProject() {
  return (
    <><h2>Electric Vehicle Charging Stations</h2>
    <div className="entireProject">
      <div className='projectLeft'>
        <div className="projectSummary">
          <p>This project examines the distribution of EV charging stations in the San Francisco
            Bay area in terms of availability, efficiency, and equity. It utilizes spatial analysis
            and clustering method to assess their availability, equity, and efficiency. The results
            reveal disparities in charging station distribution across different census tracts and
            across different driving time frames.
          </p>
        </div>
        <div className='InShort'>
          <ul>
            <p>In short:</p>
            <li>Use NetworkX in python to model EV charging station networks</li>
            <li>Estimate how many charging stations one can reach within various time frames for different census tracts</li>
            <li>Apply clustering analysis to see what social-economic factors may impact the distribution of charging stations</li>
          </ul>
        </div>
        <div className='report'>
          <p>Click to view a detailed report of the project &rarr; </p>

          <button>
            <a href={evcsReport}> <img src={pdfIcon} alt="PDF" /> </a>
          </button>
          <button>
            <a href={evcsPresentation}> <img src={slideIcon} alt="SLIDES" /></a>
          </button>
          <button>
            <a href={evcsPresentation}> <img src={githubIcon} alt="GITHUB" /> </a>
          </button>

          
        </div>
      </div>
      {/* <div className='projectRight'>
        <img src={optSetUp} alt="OPT setup" /> 
      </div> */}
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


export default ElectricVehicleChargingStationsProject;