import React from 'react';
import qieSetUp from '../assets/qieSetUp.png';
import qieReport from '../assets/documents/QIE_report.pdf';
// import './QuantumMechanicsProject.css';

function QuantumMechanicsProject() {
  return (
    <div className="project-container">
      <h2>Quantum Interference & Entanglement</h2>
      <div className="project-info">
        <p>This lab investigates quantum entanglement and interference and attempts to violate 
          Bell’s inequality. The experimental setup includes a source of entangled photons and 
          detectors to measure the photons’ coincidence. The results of the experiment provide 
          evidence for validating quantum mechanics against local hidden variable theories.</p>
        <div className='InShort'>
          <ul>
            <p>In short:</p>
            <li>Use diode laser and halfwave plates to generate entangled photons</li>
            <li>Use infrared lasers and beam splitter cubes to calibrate the photons path</li>
            <li>Utilize photodiode detectors and LabView to optimize the coincidence rate of photons</li>
            <li>Analyze the measurement data and compared with theoretical predictions</li>
          </ul>
          <a href={qieReport}>Click to view a detailed report of the experiment</a>
          {/* using google for pdf
          <a href="https://drive.google.com/file/d/1AsK7XLblgviFMIE1uLxlZsC5AY0taHVU/view?usp=sharing">Click to view a detailed report of the experiment</a> */}
          
        </div>
        <img src={qieSetUp} alt="QIE setup" />
      </div>
    </div>
  );
}

export default QuantumMechanicsProject;