import React from 'react';
import { Link } from 'react-router-dom';
import qieCover from '../assets/qieCover.png'
import optCover from '../assets/optCover.png'
import muoCover from '../assets/muoCover.png'
import evcsCover from '../assets/evcsCover.png'
import '../css/projects.css';


function Projects() {
    return (
        <div className="projects-container">
            <div className="project">
            <Link to="/projects/qie">
                <img src={qieCover} alt="Quantum Mechanics" />
                <div className="titleContent">
                    <h2>Quantum Interference & Entanglement</h2>
                    <p>Phy111B experiment</p>
                    <span>View project</span>
                </div>  
            </Link>
            </div>
            <div className="project">
            <Link to="/projects/opt">
                <img src={optCover} alt="Optical Pumping" />
                <div className="titleContent">
                    <h2>Optical Pumping</h2>
                    <p>Phy111B experiment</p>
                    <span>View project</span>
            </div>
            </Link>
            </div>
            <div className="project">
            <Link to="/projects/muo">
                <img src={muoCover} alt="Muon Lifetime"  />
                <div className="titleContent">
                    <h2>Muon Lifetime</h2>
                    <p>Phy111B experiment</p>
                    <span>View project</span>
                </div>
            </Link>
            </div>
            <div className="project">
            <Link to="/projects/evcs">
                <img src={evcsCover} alt="EV Charging Stations"  />
                <div className="titleContent">
                    <h2>EV Charging Stations</h2>
                    <p>CE88 project</p>
                    <span>View project</span>
                </div>
            </Link>
            </div>
      </div>
    );
  }
  

export default Projects;

