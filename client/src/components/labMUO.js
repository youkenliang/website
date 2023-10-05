import React from 'react';
// import muotSetUp from '../assets/muoSetUp.png';
import muoReport from '../assets/documents/MUO_Report.pdf';
import pdfIcon from "../assets/pdf.png";
import '../Projects.css';

function MuonLifetimeProject() {
  return (
    <><h2>Muon Lifetime</h2>
    <div className="entireProject">
      <div className='projectLeft'>
        <div className='projectSummary'>
          <p>This lab report presents the results of an experiment conducted to determine the
          lifetime of muons. The experiment utilizes a scintillation tank to record muon decays
          and applies LabView programs to analyze signals and noises. The goal of the lab is to gain
          practical experience in conducting experiments while also developing an understanding
          of the limitations of electronics and their impact on the experimental process.
          </p>
        </div>
        <div className='InShort'>
        <ul>
            <p>In short:</p>
            <li>Test the time resolution of the digitizer</li>
            <li>Combine two uncorrelated signals to test the effiency of the digitizer</li>
            <li>Test the accuracy of the digitizer clock with various delayed signals</li>
            <li>Determine the optimal settings of LabView programs to record muon decays and calculate muon lifetime</li>
          </ul>
        </div>
        <div className='report'>
          <p>Click to view a detailed report of the project &rarr; </p>

          <button>
            <a href={muoReport}> <img src={pdfIcon} alt="PDF" /> </a>
          </button>
        </div>
      </div>
      {/* <div className='projectRight'>
        <img src={muoSetUp} alt="muo setup" /> 
      </div> */}
    </div></>  

  );
  }
  
export default MuonLifetimeProject;