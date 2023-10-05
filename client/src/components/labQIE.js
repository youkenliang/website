import React from 'react';
import qieSetUp from '../assets/qieSetUp.png';
import qieReport from '../assets/documents/QIE_report.pdf';
import pdfIcon from "../assets/pdf.png";
import '../Projects.css';

function QuantumMechanicsProject() {
  return (
    <><h2>Quantum Interference & Entanglement</h2>
    <div className="entireProject">
      <div className='projectLeft'>
        <div className="projectSummary">
          <p>This lab investigates quantum entanglement and interference and attempts to violate 
            Bell’s inequality. The experimental setup includes a source of entangled photons and 
            detectors to measure the photons’ coincidence. The results of the experiment provide 
            evidence for validating quantum mechanics against local hidden variable theories.</p>
        </div>
        <div className='InShort'>
          <ul>
            <p>In short:</p>
            <li>Use diode laser and halfwave plates to generate entangled photons</li>
            <li>Use infrared lasers and beam splitter cubes to calibrate the photons path</li>
            <li>Utilize photodiode detectors and LabView to optimize the coincidence rate of photons</li>
            <li>Analyze the measurement data and compared with theoretical predictions</li>
          </ul>
        </div>
        <div className='report'>
          <p>Click to view a detailed report of the project &rarr; </p>

          <button>
            <a href={qieReport}> <img src={pdfIcon} alt="PDF" /> </a>
          </button>
        </div>
      </div>
      <div className='projectRight'>
        <img src={qieSetUp} alt="OPT setup" /> 
      </div>
    </div></>
  );
}

export default QuantumMechanicsProject;